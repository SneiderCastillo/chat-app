import { html, css, LitElement } from "lit";

export class Animal extends LitElement {
  static styles = css`
    p {
      color: red;
    }
  `;

  static properties = {
    type: { type: String },
    size: { type: Number },
    isHealthy: { type: Boolean },
  };

  constructor() {
    super();
    this.type = "";
    this.size = 0;
    this.isHealthy = false;
  }

  render() {
    return html`<pre>
    Type: ${this.type}
    Size: ${this.size}
    Is Healthy:  ${this.isHealthy}
    </pre
    >`;
  }
}

window.customElements.define("custom-animal", Animal);
