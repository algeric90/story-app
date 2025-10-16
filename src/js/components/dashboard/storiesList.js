import { LitElement, html } from "lit";

class storiesList extends LitElement{
  createRenderRoot() {
    return this;
  }

  static properties = {
    stories: { type: Array }
  };

  constructor(){
    super();
    this.stories = [];
  };

  connectedCallback(){
    this.classList.add('container-md','mb-4','mb-md-5');
    super.connectedCallback();
  }

  
  render(){
    return html`
      <div class="row g-3 g-md-4 g-lg-5">
        ${this.stories.map(
          (story) => html`
            <story-card
              .id=${story.id}
              .name=${story.name}
              .description=${story.description}
              .photoUrl=${story.photoUrl}
              .createdAt=${story.createdAt}
            ></story-card>
          `
        )}
      </div>
    `;
  }
}

customElements.define("stories-list", storiesList);
