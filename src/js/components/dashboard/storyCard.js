import { LitElement, html, css } from "lit";

class storyCard extends LitElement{
  createRenderRoot() {
    return this;
  }
  constructor(){
    super();
  };

  static styles = css``;
  render(){
    return html`
      <div class="card">
        <div class="card-header">
          <img src="img/logo.png" class="card-img-top" alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div>`;
  }
}

customElements.define("story-card", storyCard);