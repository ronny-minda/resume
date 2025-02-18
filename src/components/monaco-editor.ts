import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as monaco from 'monaco-editor';

@customElement('monaco-editor')
export class MonacoEditor extends LitElement {

  static styles = css`
    :host {
      height: 200px;
      width: 200px;
      display: block;
      position: relative;
    }
    #editor {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
    }
  `;


  firstUpdated() {

    

  }

  render() {
    return html``;
  }
}