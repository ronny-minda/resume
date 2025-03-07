import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./components/aside-element";
import "./components/cv-element";
import "./components/centro-elements";
import "./components/templates-elements";
import "./components/monte-desmonte";
import "./components/loader-elements";
import { loaderDescarga, template, zoom } from "./store/ui";
import { SignalWatcher } from "@lit-labs/preact-signals";
import { createElement, Mail } from "lucide";

@customElement("root-element")
export class MyElement extends SignalWatcher(LitElement) {
  render() {
    return html`
      <div class="conte">
        <aside-element></aside-element>
        <centro-element style="scrollbar-gutter: stable both-edges;"></centro-element>
      </div>
      <footer>
        <span>
          Sitio desarrollado por&nbsp;<a href="https://ronnyminda.vercel.app/">Ronny Minda V.</a>
        </span>

        <div class="aparte">
          <input type="range" min="0" max="100" step="1" @input=${(e: Event) => ( zoom.value = parseInt((e.target as HTMLInputElement).value) )} />
          <span>${zoom.value}%</span>
          <div class="ico">${createElement(Mail)}</div>
        </div>
      </footer>

      <monte-desmonte .duration=${0.4} .montado=${template.value}>
        <templates-element></templates-element>
      </monte-desmonte>
      <monte-desmonte .duration=${0.4} .montado=${loaderDescarga.value}>
        <loader-element></loader-element>
      </monte-desmonte>
    `;
  }

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .conte {
      display: flex;
      height: calc(100vh - 30px);
      width: 100vw;
    }
    footer {
      height: 30px;
      width: 100vw;
      background-color: #efefef;
      position: absolute;
      z-index: 9;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      border-top: 1px solid #aaacc2;
      a {
        color: #000;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }

      .aparte {
        display: flex;
        align-items: center;
        /* justify-content: center; */
        input {
          margin-right: 20px;
          width: 200px;
        }
        span {
          margin-right: 20px;
          width: 30px;
          font-size: 15px;
          text-align: center;
        }
        .ico {
          margin-right: 20px;
          height: 20px;
          width: 20px;
          cursor: pointer;

          svg {
            height: 100%;
            width: 100%;
            stroke: #2a2a2a;
          }
        }
      }
    }
  `;
}

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
