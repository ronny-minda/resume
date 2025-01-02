import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import jsPDF from 'jspdf';

@customElement('aside-element')
export class MyElement extends LitElement {

  @state()
  cv = {
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
      fecha: "2019",
      titulo: "Tecnologo en Sistemas",
      nivel: "Superior",
      institucion: "Instituto Superior Universitario Bolivariano (ITB)",
      descripcion: "Formación como Desarrollador de Software.",
    },
    {
      fecha: "2020",
      titulo: "Full Stack",
      nivel: "Curso",
      institucion: "Platzi",
      descripcion: "Desarrollo Web en plataforma de aprendizaje en línea.",
    },
  ],
  experiencia: [
    {
      titulo: "Desarrollador Aplicaciones Frontend Eficientes",
      descripcion:
        "Desarrollo de aplicaciones frontend con experiencia en React, Tailwindcss, Zustand, Redux, y Styled Components. Optimización del rendimiento y seguridad.",
      duracion: "Nov. 2023 - Ene. 2024",
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
      descripcion:
        "Desarrollo de una aplicación con Node, Express, React.js y MongoDB. Gestión eficiente de datos y funcionalidades CRUD.",
      duracion: "May. 2022 - Jul. 2022",
      empresa: "Servicios Prestados",
    },
    {
      titulo: "Desarrollador Web Frontend y Backend",
      descripcion:
        "Desarrollo y mantenimiento de sitios web usando React, Vue, Next.js, y Nuxt.js. Implementación de animaciones con Framer Motion y optimización de rendimiento.",
      duracion: "Ago. 2022 - Dic. 2022",
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

  // connectedCallback(): void {

  //   super.connectedCallback()
  //   setTimeout(() => {
  //     this.downloadPDF()
  //   }, 1);
  // }

  private downloadPDF () {
    const element = this.renderRoot.querySelector(".cv") as HTMLElement;
    // Mostrar el PDF en el iframe
    const iframe = this.renderRoot.querySelector("iframe") as HTMLIFrameElement;
    if (!element) {
      console.error("Elemento no encontrado");
      return;
    }
  
    // Crea una instancia de jsPDF
    const pdf = new jsPDF();
  
    // Usa la función html de jsPDF
    pdf.html(element, {
      callback: (doc) => {
        // Descarga el PDF una vez que esté generado
        doc.save(`${this.cv.perfil.nombre} - Hoja de Vida.pdf`);

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

  private copy () {
    navigator.clipboard.writeText(JSON.stringify(this.cv))
      .then(() => {
        console.log('Texto copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
      })
  }

  render() {
    return html`
    <style>
      .cv {
        height: 848px;
        width: 600px;
        position: relative;
        /* background-color: red; */
        padding: 35px 28px;
        font-family: Inter;
        
        h1 {
          text-align: center;
          font-size: 26px;
          font-weight: bold;
          color: #000;
        }
        p {
          text-align: center;
          font-size: 11px;
        }
        hr {
          margin-top: 4px;
          transform: scaleY(0.3);
          border: 1px solid black;
          border-top: none;
          border-left: none;
          border-right: none;
        }
        .ita {
          /* line-height: 1.5;
          word-spacing: 3px; */
          margin-top: 4px;
          margin-left: 4px;
          text-align: start;
          font-style: italic;
        }
        h2 {
          margin-top: 7px;
          margin-left: 5px;
          font-size: 12px;
        }
        .conteExp {
          padding: 0 5px;
          font-size: 10px;
          margin-top: 7px;
          display: flex;
          justify-content: space-between;
          h4 {
            font-weight: 100;
          }
        }
        ul {
          font-size: 10px;
          padding: 0 37px;
          margin-top: 9px;
          li {
            list-style: none;
            position: relative;
            .bola {
              display: inline-block;
              position: absolute;
              top: 7px;
              left: -17px;
              height: 5px;
              width: 5px;
              background-color: #000;
              border-radius: 50%;
            }
          }
        }

        .separa {
          height: 10px;
          width: 10px;
          background-color: red;
        }

      }

      .contenedor {
        position: relative;
        .i1 {
          position: absolute;
          top: 0;
          left: 0;
        }
        .i2 {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.5;
        }
      }
    </style>
    
    <textarea 
      @input=${ (e: Event) => {
        const target = e.target as HTMLTextAreaElement
        console.log(target.value)
        const obj = JSON.parse(target.value)
        this.cv = obj
      }}
      
    >${JSON.stringify(this.cv)} </textarea>

    <button
      @click=${ () => this.copy() }
    >Copiar OBJ</button>

    <button
      @click=${ () => this.downloadPDF() }
    >Descargar CV</button>

    <a href=${`mailto:${this.cv.correoDestino}?subject=${this.cv.asuntoDestino}&body=${this.cv.mensajeDestino}`}>
      Enviar correo con enlaces
    </a>

    <div class="contenedor">
      <iframe class="i1"></iframe>
      <iframe class="i2" src="Plantilla CV - Harvard.pdf"></iframe>
    </div>

    <div class="cv">
      <h1>${this.cv.perfil.nombre}</h1>
      <p>${this.cv.contacto.direccion} · ${this.cv.contacto.web} · ${this.cv.contacto.telefono} · ${this.cv.contacto.email}</p>
      <hr>
      <p class="ita">${this.cv.perfil.descripcion}</p>
      <h2>EXPERIENCIA PROFESIONAL</h2>
      <hr style="margin-top: 0px;">

      ${
        this.cv.experiencia.map((value) => {
          const { descripcion, duracion, titulo, empresa } = value
          return ( html`

            <div class="conteExp">
              <h3>${empresa}</h3>
              <!-- <h3>Barcelona,España</h3> -->
            </div>
            <div class="conteExp" style="margin-top: -4px; font-size: 11px;">
              <h4>${titulo}</h4>
              <h4 style="font-style: italic;">${duracion}</h4>
            </div>
      
            <ul>
              ${
                descripcion.split(",").map(item => {
                  return (html`
                    <li><div class="bola"></div>${item}</li>
                  `)
                })
              }
            </ul>
          `)
        })
      }

      <h2 style="margin-top: 11px;">EDUCACIÓN</h2>
      <hr style="margin-top: 0px;">
      ${
        this.cv.educacion.map((value) => {
          const { institucion, nivel, descripcion, fecha, titulo } = value
          return ( html`
            <div class="conteExp">
              <h3>${institucion}</h3>
              <h3>${nivel}</h3>
            </div>
            <div class="conteExp" style="margin-top: -4px; font-size: 11px;">
              <h4>${titulo}</h4>
              <h4 style="font-style: italic;">${fecha}</h4>
            </div>
            <p style="text-align: start; margin-left: 5px; margin-top: -2px;">${descripcion}</p>
          `)
        })
      }
      <h2 style="margin-top: 12px;">SKILLS ADICIONALES</h2>
      <hr style="margin-top: 0px;">
      <ul>
      ${
        this.cv.experticia.map((value) => {
          return ( html`
                <li><div class="bola"></div>${value}</li>
            `)
        })
      }
      </ul>
    </div>


    
    `
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .contenedor {
      height: 1500px;
      width: 800px;
      background-color: red;
      position: fixed;
      bottom: 100%;
      right: 100%;

      iframe {
        border: none;
        height: 100%;
        width: 100%;
      }
    }

    .cv {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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
