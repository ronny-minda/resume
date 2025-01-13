import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
// import html2pdf from "html2pdf.js"


import jsPDF from "jspdf";
import {
  Copy,
  createElement,
  Download,
  LayoutTemplate,
  Send,
  View,
  Code2,
  AppWindow,
  IconNode,
  Phone,
  Mail,
  MapPin,
  Globe,
  User2,
} from "lucide";
import { until } from "lit/directives/until.js";
// import "./tan-pearl-normal";

// ${until(this.renderLucideIconToImage(User2, "#fff"))}

@customElement("aside-element")
export class MyElement extends LitElement {
  @property({ type: Array })
  template = [
    {
      img: "plantillasImg/Plantilla CV - Harvard.jpg",
      pdf: "plantillas/Plantilla CV - Harvard.pdf",
      name: "Plantilla CV - Harvard",
    },
    {
      img: "plantillasImg/Black Modern Professional Resume.jpg",
      pdf: "plantillas/Black Modern Professional Resume.pdf",
      name: "Black Modern Professional Resume",
    },
    {
      img: "plantillasImg/Currículum Agente comercial Minimalista Blanco y negro.jpg",
      pdf: "plantillas/Currículum Agente comercial Minimalista Blanco y negro.pdf",
      name: "Currículum Agente comercial Minimalista Blanco y negro",
    },
    {
      img: "plantillasImg/Currículum Agente comercial Profesional Blanco y negro.jpg",
      pdf: "plantillas/Currículum Agente comercial Profesional Blanco y negro.pdf",
      name: "Currículum Agente comercial Profesional Blanco y negro",
    },
    {
      img: "plantillasImg/Currículum Agente comercial Sencillo Crema.jpg",
      pdf: "plantillas/Currículum Agente comercial Sencillo Crema.pdf",
      name: "Currículum Agente comercial Sencillo Crema",
    },
    {
      img: "plantillasImg/Currículum CV Diseñador Gráfico Masculino Profesional Azul.jpg",
      pdf: "plantillas/Currículum CV Diseñador Gráfico Masculino Profesional Azul.pdf",
      name: "Currículum CV Diseñador Gráfico Masculino Profesional Azul",
    },
    {
      img: "plantillasImg/Curriculum CV Resume Profesional Marketing Creativo Rosa.jpg",
      pdf: "plantillas/Curriculum CV Resume Profesional Marketing Creativo Rosa.pdf",
      name: "Curriculum CV Resume Profesional Marketing Creativo Rosa",
    },
    {
      img: "plantillasImg/Currículum Diseñadora Minimalista Gris y Blanco.jpg",
      pdf: "plantillas/Currículum Diseñadora Minimalista Gris y Blanco.pdf",
      name: "Currículum Diseñadora Minimalista Gris y Blanco",
    },
    {
      img: "plantillasImg/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.jpg",
      pdf: "plantillas/Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris.pdf",
      name: "Currículum Vitae Asesor Financiero Profesional Corporativo Azul y Gris",
    },
    {
      img: "plantillasImg/Currículum Vitae Cv de Administración Simple Azul.jpg",
      pdf: "plantillas/Currículum Vitae Cv de Administración Simple Azul.pdf",
      name: "Currículum Vitae Cv de Administración Simple Azul",
    },
    {
      img: "plantillasImg/Currículum Vitae CV de Contabilidad Simple Gris.jpg",
      pdf: "plantillas/Currículum Vitae CV de Contabilidad Simple Gris.pdf",
      name: "Currículum Vitae CV de Contabilidad Simple Gris",
    },
    {
      img: "plantillasImg/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.jpg",
      pdf: "plantillas/Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa.pdf",
      name: "Currículum Vitae CV Diseñadora y Arquitecta Minimalista Rosa",
    },
    {
      img: "plantillasImg/Curriculum Vitae CV Elegante Profesional Rosa.jpg",
      pdf: "plantillas/Curriculum Vitae CV Elegante Profesional Rosa.pdf",
      name: "Curriculum Vitae CV Elegante Profesional Rosa",
    },
    {
      img: "plantillasImg/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.jpg",
      pdf: "plantillas/Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro.pdf",
      name: "Currículum Vitae CV Fotógrafo Sencillo Simple Blanco y Negro",
    },
    {
      img: "plantillasImg/Currículum Vitae CV Minimalista Sencillo Clásico Gris.jpg",
      pdf: "plantillas/Currículum Vitae CV Minimalista Sencillo Clásico Gris.pdf",
      name: "Currículum Vitae CV Minimalista Sencillo Clásico Gris",
    },
    {
      img: "",
      pdf: "plantillas/CV Español.pdf",
      name: "CV Español",
    },
  ];

  @state() private base64Image = "";
  @state() private selecionado = 1;
  @state() private templates = false;
  @state() private canbio = true;
  @state() private informaionSesible = true;
  @state() private loaderDescarga = false;
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
        puesto:
          "Ingeniero en Sistemas Computacionales - MSIG, Jefe de Sistemas",
        telefono: "+593 99 790 0800",
      },
      {
        nombre: "Brady Gutierrez",
        puesto: "Analista Desarrollador, Tecnólogo de Desarrollo de Software",
        telefono: "+593 97 932 8153",
      },
      {
        nombre: "Paul Cando",
        puesto:
          "Analista Desarrollador, Ingeniero de Sistemas - Mención en Gestión",
        telefono: "+593 98 249 9225",
      },
      {
        nombre: "Dennisse Pérez Cedeño",
        puesto:
          "Lic. Redes y Sistemas Operativos, Analista de Proyectos Digitales",
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

  renderLucideIconToImage(Ico: IconNode, color: string) {
    // Crea un canvas temporal
    const canvas = document.createElement("canvas");
    canvas.setAttribute("height", "100px");
    canvas.setAttribute("width", "100px");

    const ctx = canvas.getContext("2d");

    if (ctx) {
      // Obtiene el ícono de Lucide
      const svgElement = createElement(Ico);
      svgElement.setAttribute("height", "100%");
      svgElement.setAttribute("width", "100%");
      svgElement.setAttribute("color", color);
      const svgString = svgElement.outerHTML;

      // Crea una imagen a partir del SVG
      const img = new Image();
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      // Retorna una promesa para esperar que la imagen sea cargada
      const ii = new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0); // Renderiza el ícono en el canvas
          URL.revokeObjectURL(url); // Libera memoria

          // Obtén la imagen en Base64 y crea el elemento `<img>`
          const base64Image = canvas.toDataURL("image/png");
          const imgElement = document.createElement("img");
          imgElement.src = base64Image;
          // imgElement.alt = iconName;
          imgElement.style.height = "100%";
          imgElement.style.width = "100%";

          resolve(imgElement);
        };
        img.src = url;
      });
      return ii;
    }

    // En caso de que no haya contexto, retorna un ícono vacío
    return Promise.resolve(html`<span>Error al generar el ícono</span>`);
  }

  private async handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Verifica que sea una imagen
      if (!file.type.startsWith("image/")) {
        console.error("Por favor, selecciona un archivo de imagen.");
        return;
      }

      try {
        this.base64Image = await this.convertToBase64(file);
        console.log("Imagen en Base64:", this.base64Image);
      } catch (error) {
        console.error("Error al convertir la imagen a Base64:", error);
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

  private async downloadPDF() {
    // Carga la fuente usando fetch
    // const response = await fetch('/fonts/tan-pearl.ttf');
    // const fontData = await response.arrayBuffer(); // Carga el archivo como ArrayBuffer

    // Convierte el ArrayBuffer a base64
    // const fontBase64 = btoa(
    //   String.fromCharCode(...new Uint8Array(fontData))
    // );

    // var callAddFont = function (this: any) {
    //   // this.addFileToVFS('tan-pearl-normal.ttf', fontBase64);
    //   this.addFont('/fonts/tan-pearl.woff2', 'tan-pearl', 'normal');
    // };

    // jsPDF.API.events.push(['addFonts', callAddFont])
    
    this.loaderDescarga = true;
    const element = this.renderRoot.querySelector(".cv") as HTMLElement;
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

    // pdf.addFileToVFS('tan-pearl.woff2', font);
    // pdf.addFont('tan-pearl.woff2', 'TANPEARL', 'normal');
    // pdf.setFont('TANPEARL')

    // function loadFont(fontName: string, filePath: string, weight: 'normal'| 'bold' | 'italic'| 'bolditalic' = 'normal') {
    //   fetch(filePath)
    //     .then(response => response.blob())
    //     .then(blob => {
    //       const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);
    //       const reader = new FileReader();
    //       reader.onloadend = () => {
    //         const file64 = (reader.result as string).split(',')[1];
  
    //         pdf.addFileToVFS(fileName, atob(file64));
    //         pdf.addFont(fileName, fontName, weight);
    //       };
    //       reader.readAsDataURL(blob);
    //     })
    //     .catch(error => {
    //       console.error('Error loading font:', error);
    //     });
    // }

    // loadFont("tan-pearl", "/fonts/tan-pearl.ttf")

    console.log(pdf.getFontList())

    // Usa la función html de jsPDF
    pdf.html(element, {
      callback: (doc) => {
        // Descarga el PDF una vez que esté generado
        // doc.save(`${this.cv.perfil.nombre} - Hoja de Vida.pdf`);
        this.loaderDescarga = false;
      },
      // x: 10, // Margen X
      // y: 10, // Margen Y
      html2canvas: {
        scale: 0.35, // Escala del contenido
      },
    });
  }

  private copy() {
    navigator.clipboard
      .writeText(JSON.stringify(this.cv))
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles:", err);
      });
  }

  render() {
    return html`
      <div class="aside">
        ${this.loaderDescarga == true
          ? html`
              <style>
                .loader {
                  position: fixed;
                  top: 0;
                  left: 0;
                  height: 100vh;
                  width: 100vw;
                  z-index: 9999;
                  background-color: #0004;
                  backdrop-filter: blur(1px);
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  .lds-roller {
                    /* change color here */
                    color: #fff;
                  }

                  .lds-roller,
                  .lds-roller div,
                  .lds-roller div:after {
                    box-sizing: border-box;
                  }
                  .lds-roller {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 80px;
                  }
                  .lds-roller div {
                    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1)
                      infinite;
                    transform-origin: 40px 40px;
                  }
                  .lds-roller div:after {
                    content: " ";
                    display: block;
                    position: absolute;
                    width: 7.2px;
                    height: 7.2px;
                    border-radius: 50%;
                    background: currentColor;
                    margin: -3.6px 0 0 -3.6px;
                  }
                  .lds-roller div:nth-child(1) {
                    animation-delay: -0.036s;
                  }
                  .lds-roller div:nth-child(1):after {
                    top: 62.62742px;
                    left: 62.62742px;
                  }
                  .lds-roller div:nth-child(2) {
                    animation-delay: -0.072s;
                  }
                  .lds-roller div:nth-child(2):after {
                    top: 67.71281px;
                    left: 56px;
                  }
                  .lds-roller div:nth-child(3) {
                    animation-delay: -0.108s;
                  }
                  .lds-roller div:nth-child(3):after {
                    top: 70.90963px;
                    left: 48.28221px;
                  }
                  .lds-roller div:nth-child(4) {
                    animation-delay: -0.144s;
                  }
                  .lds-roller div:nth-child(4):after {
                    top: 72px;
                    left: 40px;
                  }
                  .lds-roller div:nth-child(5) {
                    animation-delay: -0.18s;
                  }
                  .lds-roller div:nth-child(5):after {
                    top: 70.90963px;
                    left: 31.71779px;
                  }
                  .lds-roller div:nth-child(6) {
                    animation-delay: -0.216s;
                  }
                  .lds-roller div:nth-child(6):after {
                    top: 67.71281px;
                    left: 24px;
                  }
                  .lds-roller div:nth-child(7) {
                    animation-delay: -0.252s;
                  }
                  .lds-roller div:nth-child(7):after {
                    top: 62.62742px;
                    left: 17.37258px;
                  }
                  .lds-roller div:nth-child(8) {
                    animation-delay: -0.288s;
                  }
                  .lds-roller div:nth-child(8):after {
                    top: 56px;
                    left: 12.28719px;
                  }
                }
                @keyframes lds-roller {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              </style>
              <div class="loader">
                <div class="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            `
          : ""}

        <style>
          .inputImg {
            height: 150px;
            width: 150px;
            margin: 20px 0;
            border: 1px solid red;
            background-color: #f5f7ff;
            border: 1px solid #c9cfe7;
            cursor: pointer;
            border-radius: 50%;
            /* background-image: url() */
            background-repeat: no-repeat;
            background-size: cover;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
            transition: 0.5s;

            input {
              display: none;
            }
          }
          .inputImg:hover {
            background-color: #c1c6d9;
          }
        </style>

        <label
          title="Cargar Imagen"
          class="inputImg"
          style="background-image: url(${this.base64Image})"
        >
          <input
            type="file"
            @change=${this.handleFileChange}
            accept="image/*"
          />
        </label>
        <style>
          button,
          a,
          input {
            cursor: pointer;
            background-color: #f5f7ff;
            border: 1px solid #c9cfe7;
            outline: none;
            border-radius: 4px;
            padding: 3px;
            height: 30px;
            width: 30px;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
            display: inline-block;

            svg {
              height: 100%;
              width: 100%;
              color: #535b77;
            }
            &:hover {
              svg {
                color: #8992af;
              }
            }
            &:active {
              svg {
                color: #535b77;
              }
            }
          }
          .contene {
            margin: 20px 0;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
          }
          textarea {
            width: 100%;
            height: 200px;
            border: 1px solid #c9cfe7;
            outline: none;
            border-radius: 4px;
            color: #3b4157;
            resize: none;
            field-sizing: content;
            padding: 10px;
            box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
          }
          textarea::-webkit-scrollbar {
            width: 10px;
          }
          textarea::-webkit-scrollbar-track {
            background: #b6c9e7;
            cursor: pointer;
          }
          textarea::-webkit-scrollbar-thumb {
            background-color: #6e82a1;
            border-radius: 10px;
            border: 3px solid #b6c9e7;
          }
          textarea::-webkit-scrollbar-thumb:hover {
            background-color: #4c6181;
            cursor: pointer;
          }
        </style>
        ${this.canbio == true
          ? html`
              <button
                title="UI User"
                @click=${() => (this.canbio = !this.canbio)}
              >
                ${createElement(AppWindow)}
              </button>

              <div class="contene">
                <input
                  type="checkbox"
                  .checked=${this.informaionSesible}
                  @change=${(e: Event) => {
                    const target = e.target as HTMLInputElement;
                    this.informaionSesible = target.checked;
                  }}
                />
                <button
                  title="Templates"
                  @click=${() => {
                    console.log();
                    this.templates = !this.templates;
                  }}
                >
                  ${createElement(LayoutTemplate)}
                </button>

                <button title="Copiar" @click=${() => this.copy()}>
                  ${createElement(Copy)}
                </button>

                <button title="Descargar" @click=${() => this.downloadPDF()}>
                  ${createElement(Download)}
                </button>

                <a
                  href=${`mailto:${this.cv.correoDestino}?subject=${this.cv.asuntoDestino}&body=${this.cv.mensajeDestino}`}
                >
                  ${createElement(Send)}
                </a>
              </div>

              <textarea
                @input=${(e: Event) => {
                  const target = e.target as HTMLTextAreaElement;
                  console.log(target.value);
                  const obj = JSON.parse(target.value);
                  this.cv = obj;
                }}
              >
${JSON.stringify(this.cv)} </textarea
              >
            `
          : html`
              <button
                title="UI Dev"
                @click=${() => (this.canbio = !this.canbio)}
              >
                ${createElement(Code2)}
              </button>

              ${Object.entries(this.cv).map(([key, value]) => {
                if (typeof value == typeof "") {
                  return html`
                    <label>
                      <span>${key}</span>
                      <input />
                    </label>
                  `;
                }
              })}

              <div>ui noral</div>
            `}
      </div>

      <div class="cuerpo">
        ${this.selecionado == 10
          ? html`
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

                  .iz {
                    position: relative;
                    z-index: 999;
                    height: 100%;
                    width: 227px;
                    margin-left: 24px;
                    background-color: #386dad;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #fff;
                    padding: 0 17px;

                    .bolaPerfil {
                      background-color: blue;
                      margin-top: 24px;
                      height: 192px;
                      width: 192px;
                      border-radius: 50%;
                      border: 5px solid #fff;
                      margin-bottom: 25px;

                      .imgPlatilla {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                      }
                    }
                    .ti {
                      font-weight: bold;
                      text-align: start;
                      width: 100%;
                      margin-bottom: 13px;
                    }
                    .t1 {
                      /* color: red; */
                      font-weight: bold;
                      text-align: start;
                      font-size: 11px;
                      width: 100%;
                      margin-bottom: 2px;
                      margin-left: 40px;
                      position: relative;
                      .bola {
                        height: 6px;
                        width: 6px;
                        background-color: #fff;
                        border-radius: 50%;
                        position: absolute;
                        top: 50%;
                        left: -17px;
                        transform: translateY(-50%);
                      }
                    }
                    .t2 {
                      font-size: 11px;
                      text-align: start;
                      width: 100%;
                      margin-bottom: 0px;
                      margin-left: 40px;
                    }

                    .co {
                      text-align: start;
                      width: 100%;
                      /* color: red; */
                      font-size: 12px;
                      display: flex;
                      align-items: center;
                      margin-bottom: 11px;

                      .bola {
                        padding: 5px;
                        margin-right: 6px;
                        border-radius: 50%;
                        height: 25px;
                        width: 25px;
                        background-color: #fff;
                      }
                    }
                    .raya {
                      width: 100%;
                      border-bottom: 2px solid #fff;
                      margin: 13px 0;
                    }
                  }

                  .dere {
                    height: 100%;
                    width: 305px;
                    /* background-color: red; */
                    color: #143f72;
                    padding-left: 25px;

                    .ti {
                      margin-bottom: 9px;
                      font-weight: bold;
                    }
                    p {
                      font-size: 10px;
                      font-weight: 100;
                    }
                    .raya {
                      width: 100%;
                      border-bottom: 2px solid #143f72;
                      margin: 23px 0;
                    }
                    .caja {
                      width: calc(100% - 10px);
                      /* background-color: red; */
                      padding-left: 25px;
                      margin-left: 10px;
                      border-left: 2px solid #143f72;

                      .titu {
                        font-size: 12px;
                        font-weight: bold;
                        position: relative;
                        .bola {
                          height: 11px;
                          width: 11px;
                          background-color: #143f72;
                          position: absolute;
                          top: 50%;
                          left: -31px;
                          border-radius: 50%;
                          transform: translateY(-50%);
                        }
                      }
                    }
                    /* position: relative;
                z-index: 999; */
                  }
                  .pti {
                    position: absolute;
                    top: 26px;
                    left: 0;
                    background-color: #143f72;
                    height: 150px;
                    width: 100%;
                    color: #fff;
                    h1 {
                      font-size: 41px;
                      position: absolute;
                      top: 25px;
                      left: 278px;
                      letter-spacing: -3px;
                    }
                    h2 {
                      font-weight: 100;
                      font-size: 22px;
                      position: absolute;
                      top: 88px;
                      left: 278px;
                      letter-spacing: -2px;
                    }
                  }
                }
              </style>

              <div class="cv">
                <div class="iz">
                  <div class="bolaPerfil">
                    <img
                      class="imgPlatilla"
                      src=${this.base64Image}
                      alt="perfil"
                    />
                  </div>
                  <div class="ti">CONTACTO</div>

                  <div class="co">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Phone, "#143f72"))}
                    </div>
                    ${this.cv.contacto.telefono}
                  </div>
                  <div class="co">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Mail, "#143f72"))}
                    </div>
                    ${this.cv.contacto.email}
                  </div>
                  <div class="co">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Globe, "#143f72"))}
                    </div>
                    ${this.cv.contacto.web}
                  </div>

                  <div class="raya"></div>
                  <div style="margin-top: 11px;"></div>

                  <div class="ti">EDUCACIÓN</div>
                  ${this.cv.educacion.map((value) => {
                    const { titulo, institucion, fechaFin, fechaInicio } =
                      value;
                    return html`
                      <div class="t1">
                        <div class="bola"></div>
                        ${titulo}
                      </div>
                      <div class="t2">${institucion}</div>
                      <div class="t2">${fechaInicio}-${fechaFin}</div>
                      <div style="margin-top: 11px;"></div>
                    `;
                  })}

                  <div class="raya"></div>
                  <div style="margin-top: 11px;"></div>

                  <div class="ti">HABILIDADES</div>
                  ${this.cv.experticia.map((value) => {
                    return html`
                      <div class="t1">
                        <div class="bola"></div>
                        ${value}
                      </div>
                      <div style="margin-top: 7px;"></div>
                    `;
                  })}
                </div>

                <div class="pti">
                  <h1>
                    ${this.cv.perfil.nombre.split(" ")[0]}
                    ${this.cv.perfil.nombre.split(" ")[2]}
                  </h1>
                  <h2>${this.cv.perfil.titulo}</h2>
                </div>

                <div class="dere">
                  <div style="margin-top: 199px;"></div>
                  <div class="ti">ACERCA DE MÍ</div>
                  <p>${this.cv.perfil.descripcion}</p>
                  <div class="raya"></div>
                  <!-- <div class="rayaY"></div> -->

                  <div class="ti">EXPERIENCIA LABORAL</div>
                  <div class="caja">
                    ${this.cv.experiencia.map((value) => {
                      const {
                        descripcion,
                        duracionFin,
                        duracionInicio,
                        empresa,
                        titulo,
                      } = value;
                      return html`
                        <div class="titu">
                          <div class="bola"></div>
                          ${titulo}
                        </div>
                        <div style="margin-top: 6px;"></div>
                        <p>${empresa}</p>
                        <p>${duracionInicio}-${duracionFin}</p>
                        <div style="margin-top: 6px;"></div>
                        ${descripcion.map((valor) => html`<p>${valor}</p>`)}
                        <div style="margin-top: 8px;"></div>
                      `;
                    })}
                  </div>
                </div>
              </div>
            `
          : ""}
        ${this.selecionado == 4
          ? html`
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
                      font-family: 'TAN - PEARL';
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

              <div class="cv">
                <!-- <img
        class="imgPlatilla"
        src="plantillasImg/Currículum Agente comercial Profesional Blanco y negro.jpg"
        alt="perfil"
      > -->

                <div class="iz">
                  <div class="bolaFoto"></div>

                  <div class="mi">Sobre mi</div>
                  <div class="mide">${this.cv.perfil.descripcion}</div>

                  <div class="mi">Contacto</div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Phone, "#fff"))}
                    </div>
                    ${this.cv.contacto.telefono}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Mail, "#fff"))}
                    </div>
                    ${this.cv.contacto.email}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(MapPin, "#fff"))}
                    </div>
                    ${this.cv.contacto.direccion}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Globe, "#fff"))}
                    </div>
                    ${this.cv.contacto.web}
                  </div>

                  <!-- <div class="mi">Experticia</div>
        ${this.cv.experticia.map((value) => {
                    return html`<div class="li">
                      <div class="bola"></div>
                      ${value}
                    </div>`;
                  })} -->
                </div>

                <div class="dere">
                  <div style="margin-top: 30px;"></div>

                  <div class="ti1" style="font-family: 'TAN - PEARL';">${this.cv.perfil.nombre.split(" ")[0]}</div>
                  <div style="margin-top: -4px;"></div>
                  <div class="ti1">${this.cv.perfil.nombre.split(" ")[2]}</div>
                  <div class="ti2">${this.cv.perfil.titulo}</div>
                  <div style="margin-top: 70px;"></div>
                  <div class="ti">Experiencia laboral</div>
                  <div style="margin-top: 10px;"></div>
                  ${this.cv.experiencia.map((value) => {
                    const {
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                      titulo,
                    } = value;
                    return html`
                      <div style="margin-top: 15px;"></div>
                      <div class="tra">${titulo}</div>
                      <div class="tra2">
                        ${empresa} | ${duracionInicio} - ${duracionFin}
                      </div>
                      <div style="margin-top: 4px;"></div>
                      ${descripcion.map(
                        (value) =>
                          html`<li class="tra2" style="padding-left: 7px;">
                            - ${value}
                          </li>`
                      )}
                    `;
                  })}
                  <div style="margin-top: 20px;"></div>

                  <div class="ti">Datos académicos</div>

                  <div style="margin-top: 15px;"></div>
                  ${this.cv.educacion.map((value) => {
                    const { titulo, institucion, fechaInicio, fechaFin } =
                      value;
                    return html`
                      <div class="tra">${institucion}</div>
                      <div class="tra2">
                        ${titulo} | ${fechaInicio} - ${fechaFin}
                      </div>
                      <div style="margin-top: 10px;"></div>
                    `;
                  })}
                </div>
              </div>
            `
          : ""}
        ${this.selecionado == 3
          ? html`
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

                  .iz {
                    position: relative;
                    height: 100%;
                    width: 210px;
                    /* background-color: red; */
                    display: flex;
                    flex-direction: column;
                    align-items: end;
                    padding-right: 15px;
                    padding-top: 67px;
                    /* justify-content: center; */

                    .bola {
                      height: 9px;
                      width: 9px;
                      border: 1px solid #000;
                      background-color: #fff;
                      border-radius: 50%;
                      position: absolute;
                      top: 50%;
                      right: 0;
                      transform: translateX(19px) translateY(-50%);
                      z-index: 999999;
                    }

                    .foto {
                      height: 223px;
                      width: 135px;
                      background-color: #b7b7b7;
                      margin-bottom: 30px;

                      .imgPlatilla {
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        filter: grayscale(1);
                      }
                    }

                    .abi {
                      font-size: 12px;
                      font-weight: bold;
                      margin-bottom: 10px;
                      margin-top: 20px;
                      position: relative;
                    }

                    p {
                      font-size: 10px;
                      width: 150px;
                      text-align: end;
                    }

                    .bti {
                      font-size: 10px;
                      font-weight: bold;
                      text-align: end;
                    }

                    .bp {
                      font-size: 10px;
                      text-align: end;
                      margin-bottom: 10px;
                    }

                    .raya {
                      position: absolute;
                      top: 80px;
                      right: 0;
                      height: 750px;
                      border-right: 1px solid #000;
                    }
                  }

                  .dere {
                    height: 100%;
                    width: 310px;
                    padding-top: 64px;
                    padding-left: 18px;

                    /* background-color: red; */

                    .bola {
                      height: 9px;
                      width: 9px;
                      border: 1px solid #000;
                      background-color: #fff;
                      border-radius: 50%;
                      position: absolute;
                      top: 50%;
                      left: 0;
                      transform: translateX(-23px) translateY(-50%);
                    }
                    h1 {
                      font-size: 26px;
                      position: relative;
                    }
                    h2 {
                      margin-top: -7px;
                      font-size: 12px;
                      letter-spacing: 2px;
                      margin-bottom: 21px;
                      font-weight: 100;
                    }
                    .so {
                      font-size: 12px;
                      font-weight: bold;
                      margin-bottom: 10px;
                      position: relative;
                    }

                    .st {
                      font-size: 10px;
                      font-weight: bold;
                      /* color: red;  */
                      margin-top: -4px;
                    }
                    .sp {
                      margin-top: -2px;
                      font-size: 10px;
                      /* color: red;  */
                    }
                    li {
                      margin-top: 2px;
                      margin-left: 4px;
                      /* margin-bottom: 14px; */
                      /* color: red;  */
                      font-size: 10px;
                    }
                    li::marker {
                      margin-right: 2px;
                    }
                    p {
                      font-size: 10px;
                      /* width: 150px; */
                      /* text-align: end; */
                    }
                    table {
                      margin-bottom: 18px;
                      margin-top: 13px;

                      .tt {
                        padding-right: 40px;
                        padding-left: 5px;
                      }
                      td {
                        font-size: 10px;
                        /* display: flex; */
                        text-align: start;

                        .ico {
                          height: 21px;
                          width: 21px;
                          padding: 4px;
                          margin-bottom: 3px;
                          border-radius: 50%;
                          background-color: #000;
                        }
                      }
                    }
                  }
                }
              </style>

              <div class="cv">
                <!-- <img class="imgPlatilla" src="plantillasImg/Currículum Agente comercial Minimalista Blanco y negro_page-0001.jpg" alt="perfil"> -->

                <div class="iz">
                  <div class="foto">
                    <img
                      class="imgPlatilla"
                      src=${this.base64Image}
                      alt="perfil"
                    />
                  </div>
                  <div class="abi">
                    <div class="bola"></div>
                    DATOS ACADÉMICOS
                  </div>
                  ${this.cv.educacion.map((value) => {
                    const { titulo, fechaFin, fechaInicio, institucion } =
                      value;
                    return html`
                      <div class="bti">${institucion}</div>
                      <div class="bp">
                        ${titulo} | ${fechaInicio} - ${fechaFin}
                      </div>
                    `;
                  })}
                  <div class="abi">
                    <div class="bola"></div>
                    HABILIDADES
                  </div>
                  ${this.cv.experticia.map((value) => {
                    return html` <p>${value}</p> `;
                  })}

                  <div class="raya"></div>
                </div>

                <div class="dere">
                  <h1>
                    <div class="bola"></div>
                    ${this.cv.perfil.nombre.split(" ")[0]}
                    ${this.cv.perfil.nombre.split(" ")[2]}
                  </h1>
                  <h2>${this.cv.perfil.titulo}</h2>
                  <div class="so">
                    <div class="bola"></div>
                    SOBRE MÍ
                  </div>

                  <p>${this.cv.perfil.descripcion}</p>
                  <table>
                    <tr>
                      <td>
                        <div class="ico">
                          ${until(this.renderLucideIconToImage(User2, "#fff"))}
                        </div>
                      </td>
                      <td class="tt">
                        ${this.cv.datosPersonales.fechaNacimiento}
                      </td>
                      <td>
                        <div class="ico">
                          ${until(this.renderLucideIconToImage(Mail, "#fff"))}
                        </div>
                      </td>
                      <td class="tt">${this.cv.contacto.email}</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="ico">
                          ${until(this.renderLucideIconToImage(Phone, "#fff"))}
                        </div>
                      </td>
                      <td class="tt">${this.cv.contacto.telefono}</td>
                      <td>
                        <div class="ico">
                          ${until(this.renderLucideIconToImage(MapPin, "#fff"))}
                        </div>
                      </td>
                      <td class="tt">${this.cv.contacto.direccionExacta}</td>
                    </tr>
                  </table>

                  <div class="so">
                    <div class="bola"></div>
                    EXPERIENCIA LABORAL
                  </div>
                  ${this.cv.experiencia.map((value) => {
                    const {
                      titulo,
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                    } = value;
                    return html`
                      <div style="margin-top: 15px;"></div>
                      <div class="st">${titulo}</div>
                      <div class="sp" style="margin-bottom: 4px;">
                        ${empresa} | ${duracionInicio} - ${duracionFin}
                      </div>
                      ${descripcion.map((value) => {
                        return html` <li>${value}</li> `;
                      })}
                    `;
                  })}
                  ${this.informaionSesible == true
                    ? html`
                        <div class="so" style="margin-top: 20px;">
                          <div class="bola"></div>
                          INFORMACION PERSONAL
                        </div>
                        <table style="margin-top: -5px;">
                          <tr>
                            <td style="font-weight: bold;">Cedula:</td>
                            <td>${this.cv.datosPersonales.cedula}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Edad:</td>
                            <td>${this.cv.datosPersonales.edad}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Estado Civil:</td>
                            <td>${this.cv.datosPersonales.estadoCivil}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;padding-right: 30px;">
                              Fecha Nacimiento:
                            </td>
                            <td>${this.cv.datosPersonales.fechaNacimiento}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Nacionalidad:</td>
                            <td>${this.cv.datosPersonales.nacionalidad}</td>
                          </tr>
                        </table>
                      `
                    : ""}
                </div>
              </div>
            `
          : ""}
        ${this.selecionado == 2
          ? html`
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

                  .titu {
                    position: absolute;
                    top: 78px;
                    left: 0;
                    height: 117px;
                    width: 100%;
                    background-color: #043382;
                    z-index: 9;
                    color: #fff;

                    .deco {
                      position: absolute;
                      top: 0px;
                      left: 30px;
                      height: 100%;
                      width: 250px;
                      background-color: #042b6b;
                      transform: skew(-25deg);
                    }

                    .nom {
                      position: absolute;
                      top: 0px;
                      left: 233px;
                      font-weight: bold;
                      font-size: 37px;
                      height: auto;
                      width: auto;
                    }
                    .titu {
                      position: absolute;
                      top: 91px;
                      left: 310px;
                      font-size: 15px;
                      height: auto;
                      width: auto;
                    }
                  }

                  .iz {
                    height: 100%;
                    width: 222px;
                    background: #191919;
                    margin-left: 34px;
                    display: flex;
                    /* justify-content: center; */
                    align-items: center;
                    flex-direction: column;
                    color: #fff;

                    .bolaFoto {
                      position: relative;
                      z-index: 99;
                      height: 165px;
                      width: 165px;
                      background-color: #043382;
                      border-radius: 50%;
                      margin-top: 52px;
                      border: 3px solid #043382;
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
                      text-align: center;
                      margin-top: 5px;
                      font-size: 16px;
                    }
                    .mide {
                      margin-top: 5px;
                      font-size: 10px;
                      text-align: center;
                      width: 160px;
                      margin-bottom: 22px;
                    }
                    .ell {
                      font-size: 10px;
                      color: #fff;
                      margin-bottom: 12px;
                      text-align: start;
                      display: flex;
                      align-items: center;
                      padding-left: 13px;
                      /* background-color: red; */
                      width: 175px;

                      .bola {
                        padding: 3px;
                        margin-right: 5px;
                        height: 20px;
                        width: 20px;
                        background-color: #0774bb;
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
                    width: 280px;
                    padding-left: 8px;

                    .ti {
                      background-color: #043382;
                      color: #fff;
                      font-size: 13px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      width: 150px;
                      height: 24px;
                      border-radius: 20px;
                      margin-bottom: 12px;
                    }
                    .tra {
                      font-weight: bold;
                      font-size: 11px;
                      margin-left: 5px;
                    }
                    .tra2 {
                      font-size: 10px;
                      margin-left: 5px;
                    }
                  }

                  table {
                    font-size: 11px;
                  }
                }
              </style>

              <div class="cv">
                <div class="titu">
                  <div class="deco"></div>
                  <div class="nom">
                    ${this.cv.perfil.nombre.split(" ")[0].toLocaleUpperCase()}
                  </div>
                  <div style="top: 44px;left: 266px;" class="nom">
                    ${this.cv.perfil.nombre.split(" ")[2].toLocaleUpperCase()}
                  </div>
                  <div class="titu">${this.cv.perfil.titulo}</div>
                </div>
                <div class="iz">
                  <div class="bolaFoto">
                    <img src=${this.base64Image} />
                  </div>

                  <div class="mi">Sobre Mi</div>
                  <div class="mide">${this.cv.perfil.descripcion}</div>

                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Phone, "#191919"))}
                    </div>
                    ${this.cv.contacto.telefono}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Mail, "#191919"))}
                    </div>
                    ${this.cv.contacto.email}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(MapPin, "#191919"))}
                    </div>
                    ${this.cv.contacto.direccion}
                  </div>
                  <div class="ell">
                    <div class="bola">
                      ${until(this.renderLucideIconToImage(Globe, "#191919"))}
                    </div>
                    ${this.cv.contacto.web}
                  </div>

                  <div class="deta">Experticia</div>

                  ${this.cv.experticia.map((value) => {
                    return html`<div class="li">
                      <div class="bola"></div>
                      ${value}
                    </div>`;
                  })}
                </div>

                <div class="dere">
                  <div style="margin-top: 219px;"></div>
                  <div class="ti">Experience</div>
                  ${this.cv.experiencia.map((value) => {
                    const {
                      empresa,
                      duracionInicio,
                      duracionFin,
                      descripcion,
                      titulo,
                    } = value;
                    return html`
                      <div style="margin-top: 15px;"></div>
                      <div class="tra">${empresa}</div>
                      <div class="tra">${titulo}</div>
                      <div class="tra">${duracionInicio} - ${duracionFin}</div>
                      <div class="tra2">${descripcion}</div>
                    `;
                  })}
                  ${this.informaionSesible == true
                    ? html`
                        <div style="margin-top: 15px;"></div>

                        <div class="ti">Informacion</div>
                        <table style="width:100%">
                          <tr>
                            <td style="font-weight: bold;">Cedula:</td>
                            <td>${this.cv.datosPersonales.cedula}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Edad:</td>
                            <td>${this.cv.datosPersonales.edad}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Estado Civil:</td>
                            <td>${this.cv.datosPersonales.estadoCivil}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">
                              Fecha Nacimiento:
                            </td>
                            <td>${this.cv.datosPersonales.fechaNacimiento}</td>
                          </tr>
                          <tr>
                            <td style="font-weight: bold;">Nacionalidad:</td>
                            <td>${this.cv.datosPersonales.nacionalidad}</td>
                          </tr>
                        </table>
                      `
                    : ""}
                </div>
              </div>
            `
          : ""}
        ${this.selecionado == 1
          ? html`
              <style>
                .cv {
                  height: 848px;
                  width: 600px;
                  position: relative;
                  background-color: #fff;
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
              </style>

              <div class="cv">
                <h1>${this.cv.perfil.nombre}</h1>
                <p>
                  ${this.cv.contacto.direccion} · ${this.cv.contacto.web} ·
                  ${this.cv.contacto.telefono} · ${this.cv.contacto.email}
                </p>
                <hr />
                <p class="ita">${this.cv.perfil.descripcion}</p>
                <h2>EXPERIENCIA PROFESIONAL</h2>
                <hr style="margin-top: 0px;" />

                ${this.cv.experiencia.map((value) => {
                  const {
                    descripcion,
                    duracionFin,
                    duracionInicio,
                    titulo,
                    empresa,
                  } = value;
                  return html`
                    <div class="conteExp">
                      <h3>${empresa}</h3>
                      <!-- <h3>Barcelona,España</h3> -->
                    </div>
                    <div
                      class="conteExp"
                      style="margin-top: -4px; font-size: 11px;"
                    >
                      <h4>${titulo}</h4>
                      <h4 style="font-style: italic;">
                        ${duracionInicio} - ${duracionFin}
                      </h4>
                    </div>

                    <ul>
                      ${descripcion.map((item) => {
                        return html`
                          <li>
                            <div class="bola"></div>
                            ${item}
                          </li>
                        `;
                      })}
                    </ul>
                  `;
                })}

                <h2 style="margin-top: 11px;">EDUCACIÓN</h2>
                <hr style="margin-top: 0px;" />
                ${this.cv.educacion.map((value) => {
                  const {
                    institucion,
                    nivel,
                    descripcion,
                    fechaFin,
                    fechaInicio,
                    titulo,
                  } = value;
                  return html`
                    <div class="conteExp">
                      <h3>${institucion}</h3>
                      <h3>${nivel}</h3>
                    </div>
                    <div
                      class="conteExp"
                      style="margin-top: -4px; font-size: 11px;"
                    >
                      <h4>${titulo}</h4>
                      <h4 style="font-style: italic;">
                        ${fechaInicio} - ${fechaFin}
                      </h4>
                    </div>
                    <p
                      style="text-align: start; margin-left: 5px; margin-top: -2px;"
                    >
                      ${descripcion}
                    </p>
                  `;
                })}
                <h2 style="margin-top: 12px;">SKILLS ADICIONALES</h2>
                <hr style="margin-top: 0px;" />
                <ul>
                  ${this.cv.experticia.map((value) => {
                    return html`
                      <li>
                        <div class="bola"></div>
                        ${value}
                      </li>
                    `;
                  })}
                </ul>
              </div>
            `
          : ""}
      </div>

      ${this.templates == true
        ? html`
            <style>
              .back {
                position: fixed;
                bottom: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: #95adc979;
                z-index: 999;
                backdrop-filter: blur(1px);
              }
              .templateContenedor {
                border-radius: 5px;
                box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
                position: fixed;
                bottom: 0;
                left: 0;
                height: auto;
                width: 100%;
                background-color: #f5f7ff;
                z-index: 9999;
                padding: 15px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                .cada {
                  border: 1px solid #c9cfe7;
                  height: 140px;
                  margin: 7px;
                  width: 100px;
                  background-color: #fff;
                  border-radius: 3px;
                  cursor: pointer;
                  opacity: 1;
                  transition: 0.5s;
                  box-shadow: 0 10px 15px -3px #0000001a,
                    0 4px 6px -4px #0000001a;
                  transform: scale(1);
                }
                .cada:hover {
                  transform: scale(1.1);
                  opacity: 0.5;
                }
                a {
                  position: absolute;
                  top: 0;
                  right: 0;
                  z-index: 999;
                  cursor: pointer;
                  background-color: #f5f7ff;
                  border: 1px solid #c9cfe7;
                  outline: none;
                  border-radius: 4px;
                  padding: 3px;
                  height: 30px;
                  width: 30px;
                  box-shadow: 0 10px 15px -3px #0000001a,
                    0 4px 6px -4px #0000001a;
                  display: inline-block;

                  svg {
                    height: 100%;
                    width: 100%;
                    color: #535b77;
                  }
                  &:hover {
                    svg {
                      color: #8992af;
                    }
                  }
                  &:active {
                    svg {
                      color: #535b77;
                    }
                  }
                }
              }
            </style>

            <div class="back" @click=${() => (this.templates = false)}></div>
            <div class="templateContenedor">
              ${this.template.map((value, key) => {
                const { img, name, pdf } = value;
                return html`
                  <div style="position: relative;">
                    <a
                      href=${pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver Pdf"
                      >${createElement(View)}</a
                    >
                    <img
                      src=${img}
                      class="cada"
                      title=${key + 1 + name}
                      @click=${() => {
                        this.templates = false;
                        this.selecionado = key + 1;
                      }}
                    />
                  </div>
                `;
              })}
            </div>
          `
        : ""}
    `;
  }

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
    .aside {
      height: 100%;
      width: 30%;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    .cuerpo {
      overflow-y: auto;
      height: 100%;
      width: 70%;
      display: flex;

      justify-content: center;
      /* align-items: center; */
      padding: 30px 0;
    }
    .contenedor {
      /* height: 100%;
      width: 100%; */
      height: 1500px;
      width: 800px;
      background-color: red;
      /* z-index: 9999999; */
      position: relative;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        border: none;
        height: 100%;
        width: 100%;
      }
      .i2 {
        opacity: 0.5;
      }
    }

    .cv {
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
  `;
}
