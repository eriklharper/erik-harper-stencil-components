import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'erik-radio-button',
  styleUrl: 'radio-button.css',
})
export class RadioButton {

  @Prop({ reflect: true }) checked: boolean = false;
  @Prop() name: string;
  @Prop() scale: "small" | "medium" | "large" = "small";
  @Prop() value: string;

  render() {
    const id = `${this.name}.${this.value}`;
    return (
      <Host role="radio" aria-checked={this.checked} scale={this.scale}>
        <input id={id} type="radio" name={this.name} checked={this.checked} value={this.value}></input>
        <span id="radio" class={`${this.scale} ${this.checked && "checked"}`}></span>
        <label htmlFor={id}>
          <slot></slot>
        </label>
      </Host >
    );
  }

}
