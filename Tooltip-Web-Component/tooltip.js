/**
 * Creating a tooltip custom HTML element
 * Web Components
 *
 */

class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._ToolTipContainer;
  }
  connectedCallback() {
    //attach element to the dom
    const ToolTipIcon = document.createElement("span");
    ToolTipIcon.textContent = `(?)`;
    ToolTipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    ToolTipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.appendChild(ToolTipIcon);
  }
  //private method
  _showTooltip() {
    this._ToolTipContainer = document.createElement("div");
    this._ToolTipContainer.textContent = "This is the tooltip text!";
    this.appendChild(this._ToolTipContainer);
  }
  _hideTooltip() {
    this.removeChild(this._ToolTipContainer);
  }
}

customElements.define("ihub-tooltip", Tooltip);
