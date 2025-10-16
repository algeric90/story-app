import { LitElement, html } from "lit";

class AppAdd extends LitElement {
  createRenderRoot() {
    return this; 
  }

  static properties = {
    name: { type: String },
    description: { type: String },
    photoUrl: { type: String }
  };

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.photoUrl = "";
  }

  _handleInput(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  _handleSubmit(e) {
    e.preventDefault();

    if (!this.name || !this.description) {
      alert("Please fill in all required fields!");
      return;
    }

    const newStory = {
      id: Date.now().toString(),
      name: this.name,
      description: this.description,
      photoUrl: this.photoUrl || "https://placehold.co/400x250?text=No+Image",
      createdAt: new Date().toISOString(),
    };

    console.log("✅ New story added:", newStory);

    // Kamu bisa simpan ke localStorage sementara (karena masih dummy)
    const stories = JSON.parse(localStorage.getItem("stories") || "[]");
    stories.push(newStory);
    localStorage.setItem("stories", JSON.stringify(stories));

    alert("Story berhasil ditambahkan!");
    this._resetForm();
  }

  _resetForm() {
    this.name = "";
    this.description = "";
    this.photoUrl = "";
  }

  render() {
    return html`
      <section class="container py-4">
        <h2 class="text-center mb-4">Add Story</h2>

        <form @submit=${this._handleSubmit}>
          <div class="mb-3">
            <label class="form-label fw-semibold">Story Title</label>
            <input
              type="text"
              name="name"
              .value=${this.name}
              @input=${this._handleInput}
              class="form-control"
              placeholder="Enter story title"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold">Description</label>
            <textarea
              name="description"
              .value=${this.description}
              @input=${this._handleInput}
              class="form-control"
              rows="5"
              placeholder="Write your story here..."
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold">Photo URL (optional)</label>
            <input
              type="url"
              name="photoUrl"
              .value=${this.photoUrl}
              @input=${this._handleInput}
              class="form-control"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          ${this.photoUrl
            ? html`<img src="${this.photoUrl}" alt="Preview" class="preview" />`
            : ""}

          <div class="d-flex justify-content-end mt-4">
            <button type="submit" class="btn btn-primary px-4">
              <i class="fa-solid fa-paper-plane me-2"></i>Submit
            </button>
          </div>
        </form>
      </section>
    `;
  }
}

customElements.define("app-add", AppAdd);
