import { LitElement, html } from "lit";

class dashboard extends LitElement{
  createRenderRoot(){
    return this;
  }
  constructor(){
    super();
  }

  connectedCallback(){
    super.connectedCallback();
  }

  render(){
    return html`
        <h1 class="mb-2 mb-md-4">Dashboard</h1>
        <stories-list></stories-list>
    `;
  }
}

customElements.define("app-home", dashboard);

