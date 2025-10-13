import '../scss/main.scss';
import "./components/index";
import * as bootstrap from "bootstrap";

import { LitElement, html, css } from 'lit';

class app extends LitElement {
  createRenderRoot() {
    return this;
  };

  constructor() {
    super();
    this.dataStories = [];
  }
  

  connectedCallback() {
    super.connectedCallback();
    this._initialData();
    window.addEventListener('resize', this._adjustLayout);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._adjustLayout);
  }
  firstUpdated() {
    this._adjustLayout();
  }
  _adjustLayout() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      main.style.minHeight = `calc(100vh -${header.clientHeight}px)`;
    }
  }
  async _initialData() {
    try {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      this.dataStories = data.listStory;
      this.requestUpdate();
    }catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }


  render(){
    return html`
      <header>
        <app-nav logoSrc="img/logo.png" appName="Story App"></app-nav>
      </header>
      <main id="main-content">
        <div class="container-md py-3 py-md-5">
          <app-home .stories=${this.dataStories}></app-home>
        </div>
      </main>
    `;
  }
}
customElements.define('app-root', app);