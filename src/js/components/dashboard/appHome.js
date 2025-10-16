import { LitElement, html } from "lit";

class dashboard extends LitElement{
  createRenderRoot(){
    return this;
  }

  constructor(){
    super();
    this.stories = [];
  }

  connectedCallback(){
    super.connectedCallback();
    this._initialData();
  }

  async _initialData() {
    try {
      const response = await fetch('/data/data.json');
      const data = await response.json();
      this.stories = data.listStory;
      console.log(this.stories);
      this.requestUpdate();
    }catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  render(){
    return html`
        <h1 class="mb-0 mb-md-4">Dashboard</h1>
        ${this.stories.length > 0
          ? html`<stories-list .stories=${this.stories}></stories-list>`
          : html`<p>Data tidak ditemukan!</p>`
        }
    `;
  }
}

customElements.define("app-home", dashboard);

