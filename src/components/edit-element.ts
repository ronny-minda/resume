import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import jsPDF from 'jspdf';
import { createElement, Phone, MapPin, Mail, createIcons, icons, IconNode } from 'lucide';

@customElement('edit-element')
export class MyElement extends LitElement {

  @state() private modoEditor = true
  @state() private base64Image = ""
  @state() private selecionado = 1
  @state() private templates = false
  @state() private canbio = false
  @state() private informaionSesible = true
  @state()
  private cv = {
  correoDestino: "",
  mensajeDestino: "",
  asuntoDestino: "",
  contacto: {
    telefono: "0993105654",
    email: "ronny.minda.vera@gmail.com",
    web: "https://ronnyminda.vercel.app/",
    direccion: "ISLA TRINITARIA",
    direccionExacta: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
  },
  perfil: {
    nombre: "Ronny Michael Minda Vera",
    titulo: "Desarrollador Full Stack",
    descripcion:
      "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
  },
  datosPersonales: {
    cedula: "0954703468",
    fechaNacimiento: "25/08/1999",
    estadoCivil: "Soltero",
    nacionalidad: "Ecuatoriano",
    lugarNacimiento: "Guayaquil",
    edad: 24,
  },
  educacion: [
    {
      fechaInicio: "2019",
      fechaFin: "2023",
      titulo: "Tecnologo en Sistemas",
      nivel: "Superior",
      institucion: "Instituto Superior Universitario Bolivariano (ITB)",
      descripcion: "Formación como Desarrollador de Software.",
    },
    {
      fechaInicio: "2020",
      fechaFin: "2022",
      titulo: "Full Stack",
      nivel: "Curso",
      institucion: "Platzi",
      descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
    },
  ],
  experiencia: [
    {
      titulo: "Desarrollador Aplicaciones Frontend Eficientes",
      descripcion: [
        "Desarrollo de aplicaciones frontend con experiencia en React",
        "Tailwindcss, Zustand, Redux",
        "Styled Components",
        "Styled Components",
      ],
      duracionInicio: "Nov. 2023",
      duracionFin: "Feb. 2024",
      empresa: "Central File",
    },
    // {
    //   titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
    //   descripcion:
    //     "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
    //   duracion: "Mar. 2022 - May. 2022",
    //   empresa: "Servicios Prestados",
    // },
    {
      titulo: "Plataforma de administración de estudiantes Frontend/Backend",
      descripcion: [
        "Desarrollo de una aplicación con Node, Express",
        "React.js y MongoDB",
        "Gestión eficiente de datos y funcionalidades CRUD",
      ],
      duracionInicio: "May. 2022",
      duracionFin: "Jul. 2022",
      empresa: "Servicios Prestados",
    },
    {
      titulo: "Desarrollador Web Frontend y Backend",
      descripcion: [
        "Desarrollo y mantenimiento de sitios web usando React",
        "Vue, Next.js, y Nuxt.js",
        "Implementación de animaciones con Framer Motion y optimización de rendimiento",
      ],
      duracionInicio: "Ago. 2022",
      duracionFin: "Dic. 2022",
      empresa: "Manasystem (Servicios Prestados)",
    },
  ],
  experticia: [
    "Frontend y Backend",
    "UX UI",
    "Arquitectura cliente-servidor con REST APIs",
    "Gestión de estado con Tanstack Query",
  ],
  tecnologias: [
    "Node.js APIs",
    "Framer Motion",
    "Vue",
    "Nuxt.js",
    "React.js",
    "Preact.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Bcrypt.js",
    "Redux",
    "Zustand",
    "Tailwindcss",
  ],
  referencias: [
    {
      nombre: "Byron Asencio Rodriguez",
      puesto: "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
      telefono: "+593 99 790 0800",
    },
    {
      nombre: "Brady Gutierrez",
      puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
      telefono: "+593 97 932 8153",
    },
    {
      nombre: "Paul Cando",
      puesto: "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
      telefono: "+593 98 249 9225",
    },
    {
      nombre: "Dennisse Pérez Cedeño",
      puesto: "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
      telefono: "+593 99 440 8857",
    },
  ],
};

convertSvgToPng(svgElement: SVGElement, width: number = 50, height: number = 50): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    // Serializa el SVG a una cadena
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    // Crea un canvas para convertir el SVG en PNG
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      reject(new Error('No se pudo obtener el contexto del canvas'));
      return;
    }

    // Carga el SVG en una imagen y dibújalo en el canvas
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url); // Limpia la memoria

      // Convierte el canvas a un PNG y crea un elemento <img>
      canvas.toBlob((blob) => {
        if (blob) {
          const pngUrl = URL.createObjectURL(blob);
          const imgElement = document.createElement('img');
          imgElement.src = pngUrl;
          imgElement.width = width;
          imgElement.height = height;
          resolve(imgElement);
        } else {
          reject(new Error('No se pudo convertir el canvas a un Blob'));
        }
      }, 'image/png');
    };

    img.onerror = () => {
      reject(new Error('Error al cargar la imagen'));
    };

    img.src = url;
  });
}


async getImage(ico: IconNode) {
  const svgElement = createElement(MapPin) as SVGElement;
  const imgElement = await this.convertSvgToPng(svgElement);
  console.log(imgElement.outerHTML)
  return imgElement.outerHTML; // Devuelve la etiqueta <img> como una cadena


}

  connectedCallback(): void {

    super.connectedCallback()

    createIcons({ icons });

    if(this.modoEditor) {
      setTimeout(() => {
        this.downloadPDF()
      }, 1);
    }
  }

  private async handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Verifica que sea una imagen
      if (!file.type.startsWith('image/')) {
        console.error('Por favor, selecciona un archivo de imagen.');
        return;
      }

      try {
        this.base64Image = await this.convertToBase64(file);
        console.log('Imagen en Base64:', this.base64Image);
      } catch (error) {
        console.error('Error al convertir la imagen a Base64:', error);
      }
    }
  }

  private convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  private downloadPDF () {
    const element = this.renderRoot.querySelector(".cv") as HTMLElement;
    // Mostrar el PDF en el iframe
    const iframe = this.renderRoot.querySelector("iframe") as HTMLIFrameElement;
    if (!element) {
      console.error("Elemento no encontrado");
      return;
    }
  
    // Crea una instancia de jsPDF
    const pdf = new jsPDF({
      format: "a4"
    });
  
    // Usa la función html de jsPDF
    pdf.html(element, {
      callback: (doc) => {
        // Descarga el PDF una vez que esté generado
        if (!this.modoEditor) {
          doc.save(`${this.cv.perfil.nombre} - Hoja de Vida.pdf`);
        }

        // Convertir el PDF a una URL base64
      // const pdfDataUri = doc.output("datauristring");
      const pdfDataUri = doc.output("dataurlstring");

      if (iframe) {
        iframe.src = pdfDataUri;
      } else {
        console.error("Iframe no encontrado");
      }
      },
      // x: 10, // Margen X
      // y: 10, // Margen Y
      html2canvas: {
        scale: 0.350, // Escala del contenido
      },
    });
  };

  render() {
    return html`
    <style>
      .cv {
        display: flex;
        height: 848px;
        width: 600px;
        position: relative;
        background-color: #fff;
        /* padding: 35px 28px; */
        font-family: Helvetica;
        /* font-family: Inter; */

      }
    </style>

    <div>
      <div class="cv">
      
      </div>
    </div>
    
  `}

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: flex;
      height: 100vh;
      width: 100vw;
    }

    .cv {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      position: relative;

      .img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: red;
        z-index: 9999;
        opacity: 0.5;
        background-image: url("pantillasImg/Black Modern Professional Resume.jpg");
        background-size: contain
      }
    }

  `
}









// const cv = {
//   contacto: {
//     telefono: "0993105654",
//     email: "ronny.minda.vera@gmail.com",
//     web: "https://ronnyminda.vercel.app/",
//     direccion: "ISLA TRINITARIA COOP ANTONIO MZ. 12A SL. 13B",
//   },
//   perfil: {
//     nombre: "Ronny Michael Minda Vera",
//     titulo: "Desarrollador Full Stack",
//     descripcion:
//       "Desarrollador web con experiencia en desarrollo de aplicaciones web, diseño de interfaz de usuario (UI) y experiencia de usuario (UX). Enfocado en el desarrollo de software tanto front-end como back-end, con el objetivo de crear aplicaciones dinámicas y estáticas con experiencias intuitivas y atractivas.",
//   },
//   datosPersonales: {
//     cedula: "0954703468",
//     fechaNacimiento: "25/08/1999",
//     estadoCivil: "Soltero",
//     nacionalidad: "Ecuatoriano",
//     lugarNacimiento: "Guayaquil",
//     edad: 24,
//   },
//   educacion: [
//     {
//       nivel: "Primaria",
//       institucion: "Milton Reyes Reyes",
//     },
//     {
//       nivel: "Secundaria",
//       institucion: "Juan Jose Plaza Bellas Artes",
//     },
//     {
//       nivel: "Superior",
//       institucion: "Instituto Superior Universitario Bolivariano (ITB)",
//       descripcion: "Formación como Desarrollador de Software.",
//     },
//     {
//       nivel: "Curso",
//       institucion: "Platzi",
//       descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
//     },
//   ],
//   experiencia: [
//     {
//       titulo: "Desarrollador Aplicaciones Frontend Eficientes",
//       descripcion:
//         "Desarrollo de aplicaciones frontend con experiencia en React, Tailwindcss, Zustand, Redux, y Styled Components. Optimización del rendimiento y seguridad.",
//       duracion: "Nov. 2023 - Ene. 2024",
//       empresa: "Central File",
//     },
//     {
//       titulo: "Desarrollador frontend (Portafolio de fotógrafo)",
//       descripcion:
//         "Diseño minimalista para destacar fotografías con transiciones y animaciones sutiles.",
//       duracion: "Mar. 2022 - May. 2022",
//     },
//     {
//       titulo: "Plataforma de administración de estudiantes Frontend/Backend",
//       descripcion:
//         "Desarrollo de una aplicación con Node, Express, React.js y MongoDB. Gestión eficiente de datos y funcionalidades CRUD.",
//       duracion: "May. 2022 - Jul. 2022",
//       empresa: "Servicios Prestados",
//     },
//     {
//       titulo: "Desarrollador Web Frontend y Backend",
//       descripcion:
//         "Desarrollo y mantenimiento de sitios web usando React, Vue, Next.js, y Nuxt.js. Implementación de animaciones con Framer Motion y optimización de rendimiento.",
//       duracion: "Ago. 2022 - Dic. 2022",
//       empresa: "Manasystem (Servicios Prestados)",
//     },
//   ],
//   experticia: [
//     "Frontend y Backend",
//     "React, Next.js, Vue, Nuxt.js",
//     "Animaciones con Framer Motion",
//     "Arquitectura cliente-servidor con REST APIs",
//     "Gestión de estado con Tanstack Query",
//   ],
//   tecnologias: [
//     "Node.js APIs",
//     "Framer Motion",
//     "Vue",
//     "Nuxt.js",
//     "React.js",
//     "Preact.js",
//     "Next.js",
//     "MongoDB",
//     "Express.js",
//     "Bcrypt.js",
//     "Redux",
//     "Zustand",
//     "Tailwindcss",
//   ],
//   referencias: [
//     {
//       nombre: "Byron Asencio Rodriguez",
//       puesto: "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
//       telefono: "+593 99 790 0800",
//     },
//     {
//       nombre: "Brady Gutierrez",
//       puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
//       telefono: "+593 97 932 8153",
//     },
//     {
//       nombre: "Paul Cando",
//       puesto: "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
//       telefono: "+593 98 249 9225",
//     },
//     {
//       nombre: "Dennisse Pérez Cedeño",
//       puesto: "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
//       telefono: "+593 99 440 8857",
//     },
//   ],
// };



















// import { LitElement, css, html } from 'lit'
// import { customElement, property } from 'lit/decorators.js'
// import litLogo from './assets/lit.svg'
// import viteLogo from '/vite.svg'

// /**
//  * An example element.
//  *
//  * @slot - This element has a slot
//  * @csspart button - The button
//  */
// @customElement('root-element')
// export class MyElement extends LitElement {
//   /**
//    * Copy for the read the docs hint.
//    */
//   @property()
//   docsHint = 'Click on the Vite and Lit logos to learn more'

//   /**
//    * The number of times the button has been clicked.
//    */
//   @property({ type: Number })
//   count = 0

//   render() {
//     return html`
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src=${viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://lit.dev" target="_blank">
//           <img src=${litLogo} class="logo lit" alt="Lit logo" />
//         </a>
//       </div>
//       <slot></slot>
//       <div class="card">
//         <button @click=${this._onClick} part="button">
//           count is ${this.count}
//         </button>
//       </div>
//       <p class="read-the-docs">${this.docsHint}</p>
//     `
//   }

//   private _onClick() {
//     this.count++
//   }

//   static styles = css`
//     :host {
//       max-width: 1280px;
//       margin: 0 auto;
//       padding: 2rem;
//       text-align: center;
//     }

//     .logo {
//       height: 6em;
//       padding: 1.5em;
//       will-change: filter;
//       transition: filter 300ms;
//     }
//     .logo:hover {
//       filter: drop-shadow(0 0 2em #646cffaa);
//     }
//     .logo.lit:hover {
//       filter: drop-shadow(0 0 2em #325cffaa);
//     }

//     .card {
//       padding: 2em;
//     }

//     .read-the-docs {
//       color: #888;
//     }

//     ::slotted(h1) {
//       font-size: 3.2em;
//       line-height: 1.1;
//     }

//     a {
//       font-weight: 500;
//       color: #646cff;
//       text-decoration: inherit;
//     }
//     a:hover {
//       color: #535bf2;
//     }

//     button {
//       border-radius: 8px;
//       border: 1px solid transparent;
//       padding: 0.6em 1.2em;
//       font-size: 1em;
//       font-weight: 500;
//       font-family: inherit;
//       background-color: #1a1a1a;
//       cursor: pointer;
//       transition: border-color 0.25s;
//     }
//     button:hover {
//       border-color: #646cff;
//     }
//     button:focus,
//     button:focus-visible {
//       outline: 4px auto -webkit-focus-ring-color;
//     }

//     @media (prefers-color-scheme: light) {
//       a:hover {
//         color: #747bff;
//       }
//       button {
//         background-color: #f9f9f9;
//       }
//     }
//   `
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement
//   }
// }
