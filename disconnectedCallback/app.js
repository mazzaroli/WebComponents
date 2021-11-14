class MyCostumElement extends HTMLElement {
  constructor() {
    super();
    console.log('hola desde el constructor - Memoria')
  }

  connectedCallback() {
    console.log('hola desde el DOM')
  }

  disconnectedCallback() {
    console.log('Adios del DOM')
  }
}

customElements.define('my-custome-element', MyCostumElement);

document.querySelector("my-custome-element").remove();
