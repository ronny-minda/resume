import { SignalWatcher } from "@lit-labs/preact-signals";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("monte-desmonte")
export class MyElement extends SignalWatcher(LitElement) {
  @property({ type: Boolean }) montado = false;
  @property({ type: Number }) duration = 0;

  render() {
    return html`
      <style>
        :host {
          transition: ${this.duration}s allow-discrete;
          opacity: 1;
        }
        
        @starting-style {
          :host {
            opacity: 0;
          }
        }

      </style>
      ${this.montado == false
        ? html`
            <style>
              :host {
                transition: ${this.duration}s allow-discrete;
                opacity: 0;
                display: none;
              }
            </style>
          `
        : ""}
      <slot></slot>
    `;
  }

  static styles = css``;
}
