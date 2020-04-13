import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class LitRadioButton extends LitElement {
  render() {
    return html`
      <span id="radio"></span>
      <label htmlFor={id}>
        <slot></slot>
      </label>
    `;
  }
}

customElements.define('erik-lit-radio-button', LitRadioButton);