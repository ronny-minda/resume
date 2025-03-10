import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import * as monaco from "monaco-editor";

import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

import "./centro-elements";
import "./pixel-canvas.js"
import {
  Copy,
  createElement,
  Download,
  LayoutTemplate,
  Send,
  Code2,
  SquareCheckBig,
  Square,
  CircleX,
} from "lucide";
import {
  perfilBase64Image,
  informacionCv,
  informacionDestino,
  informaionSesible,
  loaderDescarga,
  template,
  seleccionado,
} from "../store/ui";
import { SignalWatcher } from "@lit-labs/preact-signals";
import axios from "axios";

@customElement("aside-element")
export class MyElement extends SignalWatcher(LitElement) {

  connectedCallback() {
    super.connectedCallback();

    // Configurar el entorno de Monaco
    (self as any).MonacoEnvironment = {
      getWorker: function (_: string, label: string) {
        if (label === "json") {
          return new jsonWorker();
        }
        if (label === "css" || label === "scss" || label === "less") {
          return new cssWorker();
        }
        if (label === "html" || label === "handlebars" || label === "razor") {
          return new htmlWorker();
        }
        if (label === "typescript" || label === "javascript") {
          return new tsWorker();
        }
        return new editorWorker();
      },
    };

    const editor = document.getElementById("container") as HTMLDivElement;
    const elementoEditor = monaco.editor.create(editor, {
      automaticLayout: true,
      value: JSON.stringify(informacionCv.value, null, 2),
      language: "json",
    });

    elementoEditor.onDidChangeModelContent(() => {
      const value = elementoEditor.getValue();
      try {
        const parsedValue = JSON.parse(value);
        informacionCv.value = parsedValue;
      } catch (error) {
        console.error("Error al parsear JSON:", error);
      }
    });

    const elemento = document.querySelector(".edit") as HTMLDivElement;

    const fondo = document.querySelector(".fondo") as HTMLDivElement;

    fondo.addEventListener("click", function () {
      elemento.style.top = "100%";
      elemento.style.opacity = "0";
    });
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
        seleccionado,
        informaionSesible,
      };
      const response = await axios.post("http://localhost:3000/api/cv", data, {
        responseType: "blob",
      });

      loaderDescarga.value = false;

      // Crear un enlace de descarga
      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;
      const nombreArchivo = `${
        informacionCv.value.perfil.nombre.split(" ")[0]
      }_${informacionCv.value.perfil.nombre.split(" ")[2]}_CV_${
        informacionCv.value.perfil.titulo.split(" ")[0]
      }.pdf`;
      link.setAttribute("download", nombreArchivo); // Nombre del archivo a descargar
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

  private async sendMail() {
    console.log('enviando...');

    const data = {
      informacionCv,
      informacionDestino,
      perfilBase64Image,
      seleccionado,
      informaionSesible,
    };

    const response = await axios.post("http://localhost:3000/api/cv_send", data);

    console.log('response');
    console.log(response);
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
        <div class="fondo" style="scrollbar-gutter: stable both-edges;">
          <div>
            <label
              title="Cargar Imagen"
              class="inputImg"
              style="background-image: url(${perfilBase64Image.value}); clip-path: circle(50% at 50% 50%);"
            >
              <pixel-canvas
                data-gap="1"
                data-speed="100"
                data-colors="#525252, #1f1f1f, #000000"
              ></pixel-canvas>
              <input
                type="file"
                @change=${this.handleFileChange}
                accept="image/*"
              />
            </label>
          </div>

          <button
            title="UI Dev"
            @click=${() => {
              // cambio.value = !cambio.value
              const elemento = document.querySelector(
                ".edit"
              ) as HTMLDivElement;
              elemento.style.top = "0";
              elemento.style.opacity = "1";
            }}
          >
            ${createElement(Code2)}
          </button>
          <div class="contene">
            <label title="Información Sensible"
              style=${informaionSesible.value ? "background-color: #658bf3; border: 2px solid #5d82e7;": ""}
            >
              ${informaionSesible.value
                ? createElement(SquareCheckBig)
                : createElement(Square)}

              <input
                type="checkbox"
                .checked=${informaionSesible.value}
                @change=${(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  informaionSesible.value = target.checked;
                }}
              />
            </label>
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

            <button title="Enviar" @click=${() => this.sendMail()}>
              ${createElement(Send)}
            </button>

            

            <!-- <a
              href=${`mailto:${informacionDestino.value.correoDestino}?subject=${informacionDestino.value.asuntoDestino}&body=${informacionDestino.value.mensajeDestino}`}
            >
              ${createElement(Send)}
            </a> -->
          </div>

          <div class="formEdit">
            <style>
              ::details-content {
                interpolate-size: allow-keywords;
                transition: all 0.5s ease, content-visibility 0.5s ease allow-discrete;
                height: 0;
                overflow: clip;
                padding: 0px;
              }

              [open]::details-content {
                height: auto;
              }
            </style>
            ${Object.entries(informacionCv.value).map(([key, value]) => {
              // console.log(value)
              return html`
                <details class="padre" name="accordion" open>
                  <summary>${key}</summary>
                  <div
                    style="padding: 5px; border-radius: 5px; box-shadow: inset 13px 10px 15px -3px rgb(0 0 0 / 0.1),inset  16px 11px 6px -4px rgb(0 0 0 / 0.1);"
                  >
                    ${Array.isArray(value)
                      ? value.map((value1, key1) => {
                          if (value1 instanceof Object) {
                            return html`
                              <details class="hijo" name="subAccordion">
                                <summary>${key1 + 1}</summary>
                                ${Object.entries(value1).map(
                                  ([key2, value2]) => {
                                    return html`
                                      <label class="labelEdit">
                                        <span>${key2}</span>
                                        <input
                                          .value=${value2 as string}
                                          @input=${(e: Event) => {
                                            const target =
                                              e.target as HTMLInputElement;
                                            const aux =
                                              informacionCv.value as any;
                                            aux[key][key1][key2] = target.value;
                                            informacionCv.value = { ...aux };
                                          }}
                                        />
                                      </label>
                                    `;
                                  }
                                )}
                              </details>
                            `;
                          } else {
                            return html`
                              <label
                                class="labelEdit"
                                style="display: flex; flex-direction: row; align-items: center;"
                              >
                                <span style="margin-right: 5px; width: 18px;"
                                  >${key1 + 1}</span
                                >
                                <input
                                  .value=${value1 as string}
                                  @input=${(e: Event) => {
                                    const target = e.target as HTMLInputElement;
                                    const aux = informacionCv.value as any;
                                    aux[key][key1] = target.value;
                                    informacionCv.value = { ...aux };
                                  }}
                                />
                                <style>
                                  .x {
                                    height: 20px;
                                    width: 20px;
                                    cursor: pointer;
                                    margin-left: 5px;
                                    svg {
                                      height: 100%;
                                      width: 100%;
                                      color: red !important;
                                    }
                                  }
                                </style>
                                <div
                                  title="Eliminar"
                                  class="x"
                                  @click=${() => {
                                    const aux = informacionCv.value as any;
                                    aux[key].splice(key1, 1);
                                    informacionCv.value = { ...aux };
                                  }}
                                >
                                  ${createElement(CircleX)}
                                </div>
                              </label>
                            `;
                          }
                        })
                      : Object.entries(value).map(([key1, value1]) => {
                          return html`
                            <label class="labelEdit">
                              <span>${key1}</span>
                              <input
                                .value=${value1 as string}
                                @input=${(e: Event) => {
                                  const target = e.target as HTMLInputElement;
                                  const aux = informacionCv.value as any;
                                  aux[key][key1] = target.value;
                                  informacionCv.value = { ...aux };
                                }}
                              />
                            </label>
                          `;
                        })}
                  </div>
                </details>
              `;
            })}
          </div>
        </div>
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

    .aside:hover {
      .fondo::-webkit-scrollbar {
        width: 7px;
      }
      .fondo::-webkit-scrollbar-track {
        background: #efefef;
        cursor: pointer;
      }
      .fondo::-webkit-scrollbar-thumb {
        background-color: #8e9fb994;
        border-radius: 10px;
        border: 2px solid #efefef;
      }
      .fondo::-webkit-scrollbar-thumb:hover {
        background-color: #efefef;
        cursor: pointer;
      }
    }

    .aside {
      height: 100%;
      width: 100%;
      /* background-color: #fff; */
      box-shadow: 13px 10px 15px -3px rgb(0 0 0 / 0.1),
        16px 11px 6px -4px rgb(0 0 0 / 0.1);
      /* z-index: 20; */
      /* background-image: url("/img/bgAside.jpg"); */
      background-size: cover;
      background-repeat: no-repeat;

      .fondo::-webkit-scrollbar {
        width: 7px;
      }
      .fondo::-webkit-scrollbar-track {
        background: #d1d7e100;
      }
      .fondo::-webkit-scrollbar-thumb {
        background-color: #8e9fb900;
        border: 3px solid #d1d7e100;
      }
      .fondo::-webkit-scrollbar-thumb:hover {
        background-color: #4c618100;
      }

      .fondo {
        height: 100%;
        width: 100%;
        background-color: #efefef;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow-y: auto;
        padding: 10px;
      }

      .inputImg {
        /* position: relative;
        z-index: 10; */
        height: 150px;
        width: 150px;
        margin: 20px 0;
        border: 1px solid red;
        background-color: #f5f7ff;
        border: 1px solid #c9cfe7;
        cursor: pointer;
        border-radius: 50%;
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

      label {
        input {
          display: none;
        }
      }

      button,
      a,
      label {
        cursor: pointer;
        background-color: #c3c2c2;
        border: 2px solid #bbbaba;
        outline: none;
        border-radius: 4px;
        padding: 3px;
        height: 30px;
        width: 30px;
        /* box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a; */
        display: inline-block;
        transition: 0.2s;

        &:hover {
          background-color: #658bf3;
          border: 2px solid #5d82e7;
        }
        &:active {
          background-color: #658bf3;
          border: 2px solid #5d82e7;
        }

        svg {
          height: 100%;
          width: 100%;
          color: #efefef;
        }
        
      }
      .contene {
        margin: 20px 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
      }

      .formEdit {
        display: flex;
        flex-direction: column;
        width: 100%;
        /* background-color: red; */

        details {
          border-bottom: 1px solid #27292f;
        }

        summary {
          font-weight: bold;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          color: #27292f;
          padding: 10px 0;

          &::marker {
            content: "";
          }
          &::after {
            content: "+";
          }
          [open] &::after {
            content: "-";
          }

          &:hover {
            color: #666;
          }
        }

        .titulo {
          font-weight: bold;
        }
        input {
          display: inline-block;
          border: none;
          outline: none;
          padding: 5px;
          border-radius: 4px;
          border-bottom: 2px solid #c2c6fd00;
          background-color: #ffffffd9;
          transition: 0.5s;

          &:hover {
            border-bottom: 2px solid #878cc3;
          }
          &:focus {
            border-bottom: 2px solid #878cc3;
          }
        }
        .labelEdit {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          background-color: #fff0;
          border: none;
        }
      }
    }
  `;
}
