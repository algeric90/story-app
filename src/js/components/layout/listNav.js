import { LitElement, html} from "lit";

class ListNav extends LitElement{
  createRenderRoot() {
    return this;
  }
  
  constructor(){
    super();
  };

  render(){
    return html`
      <ul class="nav ms-md-auto h-100 gap-3 justify-content-evenly align-items-center">
        <li class="nav-item">
          <a class="nav-link active p-0 px-md-2 py-md-1" aria-current="page" href="#">
          <span><i class="fa-regular fa-house fa-xl text-white d-md-none"></i></span>
          <span class="text-white d-none d-md-block">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0 px-md-2 py-md-1" href="#">
          <span class="fa-stack fa-sm text-white d-md-none">
            <i class="fa-regular fa-circle fa-stack-2x"></i>
            <i class="fa-solid fa-plus fa-stack-1x fa-inverse"></i>
          </span>
          <span class="text-white d-none d-md-block">Add Story</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0 px-md-2 py-md-1" href="#">
          <span><i class="fa-regular fa-circle-user fa-xl text-white d-md-none"></i></span>
          <span class="text-white d-none d-md-block">Profile</span>
          </a>
        </li>
      </ul> 
    `;
  }
}

customElements.define("list-nav", ListNav);