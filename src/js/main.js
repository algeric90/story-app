import '../scss/main.scss';
import "./components/index";
import * as bootstrap from "bootstrap";

import { LitElement, html } from 'lit';

class app extends LitElement {
  createRenderRoot() {
    return this;
  };

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._adjustLayout);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._adjustLayout);
  }
  firstUpdated() {
    this._adjustLayout();
    const slotContent = this.querySelector('[slot="main-content"]');
    const slotElement = this.querySelector('slot')
    const main = this.querySelector('main');
    if (slotContent && main) {
      main.appendChild(slotContent);
      slotElement.remove();
    }
  }
  _adjustLayout() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      main.style.minHeight = `calc(100vh -${header.clientHeight}px)`;
    }
  }
  
  render(){
    return html`
      <header>
        <app-nav logoSrc="../img/logo.png" appName="Story App"></app-nav>
      </header>
      <main class="container-md py-3 py-md-5" id="main-content">
        <slot name="main-content"></slot>
      </main>
    `;
  }
}
customElements.define('app-root', app);