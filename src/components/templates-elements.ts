import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import { templates, template, seleccionado } from "../store/ui"
import { createElement, View } from "lucide";
import { SignalWatcher } from "@lit-labs/preact-signals";

@customElement("templates-element")
export class MyElement extends SignalWatcher(LitElement) {
  render() {
    return html`
      <div class="back" @click=${() => (template.value = false)}></div>
      <div class="templateContenedor">
        ${templates.value.map((value, key) => {
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
                  template.value = false;
                  seleccionado.value = key + 1;
                  console.log(key+1)
                }}
              />
            </div>
          `;
        })}
      </div>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* :host {
    } */

    .back {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #95adc979;
      z-index: 999;
      /* backdrop-filter: blur(1px); */
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
        box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
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
    }
  `;
}
