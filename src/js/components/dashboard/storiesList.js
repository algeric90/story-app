import { LitElement, html } from "lit";

class storiesList extends LitElement{
  createRenderRoot() {
    return this;
  }

  constructor(){
    super();
  };

  connectedCallback(){
    this.classList.add('row', 'g-3', 'g-md-4', 'g-lg-5');
    super.connectedCallback();
  }

  
  render(){
    return html`
      <div class="col-12 col-md-6">
        <story-card></story-card>
      </div>
    `;
  }
}

customElements.define("stories-list", storiesList);
