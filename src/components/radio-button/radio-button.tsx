import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'erik-radio-button',
  styleUrl: 'radio-button.css',
})
export class RadioButton {

  @Prop() checked: boolean = false;
  @Prop() name: string;
  @Prop() scale: "small" | "medium" | "large";

  render() {
    return (
      <Host role="radio" aria-checked={this.checked} scale={this.scale}>
        <label>
          <input type="radio" name={this.name} checked={this.checked}></input>
          <slot></slot>
        </label>
      </Host >
    );
  }

}
