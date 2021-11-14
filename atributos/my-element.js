class myElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });

      this.title = this.getAttribute('titulo');
      this.parrafo = this.getAttribute('parrafo');
      this.imagen = this.getAttribute('imagen')
    }

    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
        <section>
          <h2>${this.title}</h2>
          <div>
            <p>${this.parrafo}</p>
            <img src="${this.imagen}"/>
          </div>
        </section>
        ${this.getStyles()}
      `;
      return template;
    }
    getStyles() {
      return `
        <style>
          h2 {
            color: red;
          }
        </style>
      `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  customElements.define("my-element😎", myElement);