import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./centro-elements";

import {
  Copy,
  createElement,
  Download,
  LayoutTemplate,
  Send,
  Code2,
  AppWindow,
} from "lucide";
import { perfilBase64Image, cambio, informacionCv, informacionDestino, informaionSesible, loaderDescarga, template } from "../store/ui";
import { SignalWatcher } from "@lit-labs/preact-signals";
import axios from "axios";

@customElement("aside-element")
export class MyElement extends SignalWatcher(LitElement) {

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
        perfilBase64Image.value = await this.convertToBase64(file);
        console.log("Imagen en Base64:", perfilBase64Image.value);
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

    console.log("Descargando PDF...");

    loaderDescarga.value = true;

    try {
      const data = {
        informacionCv,
        informacionDestino,
        perfilBase64Image,
      }
      const response = await axios.post("http://localhost:3000/api/cv", data, {
        responseType: 'blob',
      });

      loaderDescarga.value = false;
  
      // Crear un enlace de descarga
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cv.pdf'); // Nombre del archivo a descargar
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      loaderDescarga.value = false;
      if (axios.isAxiosError(error)) {
        console.error("Error de red:", error.message);
      } else {
        console.error("Error desconocido:", error);
      }
    }

  }

  private copy() {
    navigator.clipboard
      .writeText(JSON.stringify(informacionCv.value))
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
          style="background-image: url(${perfilBase64Image.value})"
        >
          <input
            type="file"
            @change=${this.handleFileChange}
            accept="image/*"
          />
        </label>

        ${cambio.value == true
          ? html`
              <button
                title="UI User"
                @click=${() => (cambio.value = !cambio.value)}
              >
                ${createElement(AppWindow)}
              </button>

              <div class="contene">
                <input
                  type="checkbox"
                  .checked=${informaionSesible.value}
                  @change=${(e: Event) => {
                    const target = e.target as HTMLInputElement;
                    informaionSesible.value = target.checked;
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
                  href=${`mailto:${informacionDestino.value.correoDestino}?subject=${informacionDestino.value.asuntoDestino}&body=${informacionDestino.value.mensajeDestino}`}
                >
                  ${createElement(Send)}
                </a>
              </div>

              <textarea
                @input=${(e: Event) => {
                  const target = e.target as HTMLTextAreaElement;
                  console.log(target.value);
                  const obj = JSON.parse(target.value);
                  informacionCv.value = obj;
                }}
                .value=${JSON.stringify(informacionCv.value, null, 2)}
              ></textarea
              >
            `
          : html`
              <button
                title="UI Dev"
                @click=${() => (cambio.value = !cambio.value)}
              >
                ${createElement(Code2)}
              </button>

              ${Object.entries(informacionCv.value).map(([key, value]) => {
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
      box-shadow: 13px 10px 15px -3px rgb(0 0 0 / 0.1),
        16px 11px 6px -4px rgb(0 0 0 / 0.1);

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
        width: 220px;
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
