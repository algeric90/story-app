import { LitElement, html, css } from "lit";

class AppNav extends LitElement{
   static properties = {
    logoSrc: { type: String },
    appName: { type: String }
  };
  createRenderRoot() {
    return this;
  }
  
  constructor(){
    super();
  };

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('navbar','navbar-expand-md','bg-body-tertiary','fixed-top');
  }

  render(){
    return html`
      <div class="container-md">
        <button 
          class="navbar-toggler px-1" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar" 
          aria-label="Toggle navigation"
          >
          <span><i class="fa-solid fa-bars"></i></span>
        </button>
      
        <!-- logo -->
        <a class="navbar-brand p-0" href="#">
          <img src="${this.logoSrc || 'img/logo.png'}" alt="logo ${this.appName || 'App'}" height="32">
        </a>

        <!-- offcanvas -->
        <div class="offcanvas offcanvas-bottom bg-body-tertiary"  data-bs-backdrop="false" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-body">
            <list-nav></list-nav>
          </div>
        </div>

        <!-- search -->
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    `;
  }
}

customElements.define("app-nav", AppNav);