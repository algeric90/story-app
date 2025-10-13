import { LitElement, html } from "lit";

class dashboard extends LitElement{
  createRenderRoot(){
    return this;
  }
  static properties = {
    stories: { type: Array }
  };

  constructor(){
    super();
    this.stories = [];
  }


  render(){
    return html`
        <h1 class="mb-2 mb-md-4">Dashboard</h1>
        ${this.stories.length > 0
          ? html`<stories-list .stories=${this.stories}></stories-list>`
          : html`<p>⏳ Memuat cerita...</p>`
        }
    `;
  }
}

customElements.define("app-home", dashboard);

