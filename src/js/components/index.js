import './layout/appNav.js'
import './layout/listNav.js';
import './dashboard/appHome.js';
import './dashboard/storiesList.js';
import './dashboard/storyCard.js';
import './add/appAdd.js';
import './add/storyForm.js';
import './profile/appProfile.js';
import './profile/profileCard.js';
import { LitElement, html, css } from 'lit';

class app extends LitElement {
  createRenderRoot() {
    return this;
  };

  static styles = css`
    main {
      min-height: calc(100vh - 150px);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this._adjustLayout);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this._adjustLayout);
  }
  firstUpdated() {
    this._adjustLayout();
  }
  _adjustLayout() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    if (header && main) {
      main.style.minheight = `calc(100vh -${header.clientHeight}px)`;
    }
  }

  render(){
    return html`
      <header>
        <app-nav logoSrc="img/logo.png" appName="Story App"></app-nav>
      </header>
      <main id="main-content">
        <div class="container-md py-3 py-md-5">
          <app-home></app-home>
        </div>
      </main>
    `;
  }
}
customElements.define('app-root', app);