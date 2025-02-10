import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
// import html2pdf from "html2pdf.js"
import "./centro-elements"


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
import { template } from "../store/ui";
import { SignalWatcher } from "@lit-labs/preact-signals";

@customElement("aside-element")
export class MyElement extends SignalWatcher(LitElement) {

  @state() private base64Image = "";
  @state() private canbio = true;
  @state() private informaionSesible = true;
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
                  @click=${() => (template.value = !template.value)}
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
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      height: 100%;
      width: 30%;
    }
    .aside {
      height: 100%;
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);

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
    }
  `;
}
