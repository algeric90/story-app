import { LitElement, html, css } from "lit";

class storyCard extends LitElement{
  createRenderRoot() {
    return this;
  }

  static properties = {
    id: { type: String, reflect: true },
    name: { type: String },
    description: { type: String },
    photoUrl: { type: String },
    createdAt: { type: String }
  };

  constructor(){
    super();
    this.id = '';
    this.name = '';
    this.description = '';
    this.photoUrl = '';
    this.createdAt = '';
  };

  connectedCallback(){
    this.classList.add('col-12','col-md-6');
    super.connectedCallback();
  }

  _formatedDate(date){
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
  }

  render(){
    return html`
      <div class="card h-100">
        <div class="card-header p-0"> 
          <img src="${this.photoUrl || 'https://placehold.co/400x250?text=No+Image'}" alt="${this.name}" class="card-img-top">
        </div>
        <div class="card-body p-0">
          <div class="bg-body-tertiary rounded-bottom-pill rounded-start-0 w-75 ps-3 py-2 pe-5">
            <h6 class="card-title text-light text-capitalize text-truncate mb-0">${this.name}</h6>
            <small class="fw-light "> ${this._formatedDate(this.createdAt)}</small>
          </div>
          <p class="card-text px-3 py-2">${this.description}</p>
        </div>
      </div>`;
  }
}

customElements.define("story-card", storyCard);