import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createElement, IconNode, AppWindow } from 'lucide';
import { until } from 'lit/directives/until.js';
import jsPDF from 'jspdf';


@customElement('edit-pru')
export class MyElement extends LitElement {
  // @state() private base64Image: string = '';

  
  
  private downloadPDF() {
      // this.loaderDescarga = true;
      const element = document.querySelector("body") as HTMLElement;
      // Mostrar el PDF en el iframe
      // const iframe = this.renderRoot.querySelector("iframe") as HTMLIFrameElement;
      if (!element) {
        console.error("Elemento no encontrado");
        return;
      }
  
      // Crea una instancia de jsPDF
      const pdf = new jsPDF({
        format: "a4",
      });

      function loadFont(fontName: string, filePath: string, weight: 'normal'| 'bold' | 'italic'| 'bolditalic' = 'normal') {
        fetch(filePath)
          .then(response => response.blob())
          .then(blob => {
            const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
            const reader = new FileReader();
            reader.onloadend = () => {
              const file64 = (reader.result as string).split(',')[1];
    
              pdf.addFileToVFS(fileName, atob(file64));
              pdf.addFont(fileName, fontName, weight);
            };
            reader.readAsDataURL(blob);
          })
          .catch(error => {
            console.error('Error loading font:', error);
          });
      }

      loadFont("tan-pearl", "/fonts/tan-pearl.ttf")
  
      // Usa la función html de jsPDF
      pdf.html(element, {
        callback: (doc) => {
          // Descarga el PDF una vez que esté generado
          doc.save(`Hoja de Vida.pdf`);
          // this.loaderDescarga = false;
        },
        // x: 10, // Margen X
        // y: 10, // Margen Y
        html2canvas: {
          scale: 0.35, // Escala del contenido
        },
      });
    }

  render() {
    return html`
      <div @click=${()=>this.downloadPDF()}>
        aaaa
        <!-- Llamamos a la función para generar el ícono y lo renderizamos -->
         
        <!-- ${until(this.renderLucideIconToImage(AppWindow))} -->
      </div>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    div {
      background-color: red;
      height: 200px;
      width: 200px;
    }
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }
    canvas {
      border: 1px solid #ff0000;
      margin-bottom: 20px;
    }
  `;

  
  renderLucideIconToImage(Ico: IconNode) {
    
    // Crea un canvas temporal
    const canvas = document.createElement('canvas');
    canvas.setAttribute("height", "100px")
    canvas.setAttribute("width", "100px")

    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Obtiene el ícono de Lucide
      const svgElement = createElement(Ico);
      svgElement.setAttribute("height", "100%")
      svgElement.setAttribute("width", "100%")
      const svgString = svgElement.outerHTML;

      // Crea una imagen a partir del SVG
      const img = new Image();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      // Retorna una promesa para esperar que la imagen sea cargada
      const ii = new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0); // Renderiza el ícono en el canvas
          URL.revokeObjectURL(url); // Libera memoria

          // Obtén la imagen en Base64 y crea el elemento `<img>`
          const base64Image = canvas.toDataURL('image/png');
          const imgElement = document.createElement('img');
          imgElement.src = base64Image;
          // imgElement.alt = iconName;
          imgElement.style.height = '100%';
          imgElement.style.width = '100%';

          resolve(imgElement);
        };
        img.src = url;
        
      });
      console.log(ii)
      return ii
    }

    // En caso de que no haya contexto, retorna un ícono vacío
    return Promise.resolve(html`<span>Error al generar el ícono</span>`);
  }
}
