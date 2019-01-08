class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
    console.log("inside the constructor..");
  }
  connectedCallback() {
    this.addEventListener("click", e => {
      if (!confirm("Do you really want to leave?")) {
        e.preventDefault();
      }
    });
  }
}

customElements.define("wc-confirm-link", ConfirmLink, { extends : 'a'});
