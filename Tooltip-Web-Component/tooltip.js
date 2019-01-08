/**
 * Creating a tooltip custom HTML element
 * Web Components
 *
 */

class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._ToolTipContainer;
    this._ToolTipText = "Some dummy tooltip text.";
    //custom element shadow dom
    this.attachShadow({ mode: "open" });
    // const template = document.querySelector("#tooltip-template");
    this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: black;
                color:white;
                position:absolute;
                z-index: 10;
            }
        </style>
        <slot>Some default</slot>
        <span>(?)</span>`;
}
  connectedCallback() {
    //attach element to the dom
    if (this.hasAttribute("markContent")) {
      this._ToolTipText = this.getAttribute("markContent");
    }
    const ToolTipIcon = this.shadowRoot.querySelector('span');
    ToolTipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    ToolTipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(ToolTipIcon);
    this.style.position = "relative";
  }
  //private method
  _showTooltip() {
    this._ToolTipContainer = document.createElement("div");
    this._ToolTipContainer.textContent = this._ToolTipText;
    this.shadowRoot.appendChild(this._ToolTipContainer);
  }
  _hideTooltip() {
    this.shadowRoot.removeChild(this._ToolTipContainer);
  }
}

customElements.define("ihub-tooltip", Tooltip);
