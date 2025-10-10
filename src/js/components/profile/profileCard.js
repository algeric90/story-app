import { LitElement, html, css } from "lit";

class profileCard extends LitElement{
  createRenderRoot() {
    return this;
  }
  
  constructor(){
    super();
  };

  static styles = css``;
  render(){
    return html``;
  }
}

customElements.define("profile-card", profileCard);