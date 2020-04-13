import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class LitRadioGroup extends LitElement {
  disabled = false;
  name;
  scale = "small";
  vertical = false;

  render() {
    return html`
    <slot></slot>
    `;
  }
}

customElements.define('erik-lit-radio-group', LitRadioGroup);