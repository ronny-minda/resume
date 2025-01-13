import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { until } from 'lit/directives/until.js';

import jsPDF from 'jspdf';
// import { createIcons, icons } from 'lucide';
import { Copy, createElement, Download, LayoutTemplate, Send, View, Code2, AppWindow, IconNode, Phone, Mail, MapPin, Globe, User2 } from 'lucide';

@customElement('edit-element')
export class MyElement extends LitElement {

  @state() private modoEditor = true
  // @state() private base64Image = ""
  // @state() private selecionado = 1
  // @state() private templates = false
  // @state() private canbio = false
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

  // connectedCallback(): void {

  //   super.connectedCallback()

  //   createIcons({ icons });

  //   if(this.modoEditor) {
  //     setTimeout(() => {
  //       this.downloadPDF()
  //     }, 1);
  //   }
  // }

  renderLucideIconToImage(Ico: IconNode, color: string) {
    
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
      svgElement.setAttribute("color", color)
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
      return ii
    }

    // En caso de que no haya contexto, retorna un ícono vacío
    return Promise.resolve(html`<span>Error al generar el ícono</span>`);
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
        z-index: 9;
        color: #000;
        background-color: #fff;
        /* padding: 35px 28px; */
        font-family: Helvetica;
        padding: 28px 0;
        /* font-family: Inter; */
 
        .iz {
          padding-left: 25px;
          padding-right: 20px;
          height: 100%;
          width: 189px;
          /* background: #191919; */
          margin-left: 27px;
          display: flex;
          /* justify-content: center; */
          align-items: center;
          flex-direction: column;
          /* color: #fff; */
          border: 3px solid #000;

          .bolaFoto {
            position: relative;
            z-index: -1;
            height: 240px;
            width: 172px;
            background-color: #abc4ed;
            /* border-radius: 50%; */
            margin-top: 26px;
            margin-left: 34px;
            margin-bottom: 20px;
            /* border: 3px solid #043382; */
            background-repeat: no-repeat;
            background-size: cover;


            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              border-radius: 50%;
              background-color: #043382;

            }
          }
          .mi {
            width: 100%;
            text-align: start;
            margin-top: 5px;
            font-size: 18px;
            font-family: Inter;
            font-weight: bold;
            margin-bottom: 10px;
          }
          .mide {
            font-size: 10px;
            text-align: start;
            width: 100%;
            margin-bottom: 22px;
          }
          .ell {
            font-size: 10px;
            /* color: #fff; */
            margin-bottom: 5px;
            text-align: start;
            display: flex;
            align-items: center;
            padding-left: 13px;
            /* background-color: red; */
            width: 175px;

            .bola {
              padding: 4px;
              margin-right: 5px;
              height: 23px;
              width: 23px;
              background-color: #000;
              border-radius: 50%;

              svg {
                color: blue;
                height: 100%;
                width: 100%;
              }
            }
          }
        
          .deta {
            font-size: 14px;
            margin-top: 13px;
            background-color: #0774bb00;
            width: 173px;
            height: 28px;
            border-radius: 20px;
            border: 2px solid #0774bb;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 11px;
          }
          .li {
            width: 173px;
            text-align: start;
            display: flex;
            align-items: center;
            font-size: 10px;
            margin-bottom: 5px;
            padding-left: 29px;

            .bola {
              height: 5px;
              width: 5px;
              background-color: #fff;
              border-radius: 50%;
              margin-right: 7px;
            }
          }
        }

        .dere {
          /* background-color: red; */
          width: 350px;
          padding-left: 41px;

          .ti1 {
            font-family: TanPearl;
            font-size: 33px;
          }
          .ti2 {
            font-size: 12px;
          }

          .ti {
            font-size: 17px;
            text-align: start;
            font-weight: bold;
            width: 100%;
            height: 24px;
            font-family: Inter;
          }
          li {
            list-style: none;
          }
          .tra {
            font-weight: bold;
            font-size: 11px;
          }
          .tra2 {
            font-size: 10px;
            
          }
        }

        table {
          font-size: 11px;
          
        }

      }
    </style>

    <div>

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

      .imgPlatilla {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: red;
        z-index: 9999;
        opacity: 0.5;
        background-image: url("pantillasImg/Black Modern Professional Resume.jpg");
        background-size: contain;
        
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
