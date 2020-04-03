import { Component, Host, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'erik-radio-group',
  styleUrl: 'radio-group.css',
  shadow: true
})
export class RadioGroup {
  @Element() el!: HTMLElement;

  @Prop() label: string;
  @Prop() name: string;
  @Prop() scale: "small" | "medium" | "large" = "small";

  @State() inputs: HTMLErikRadioButtonElement[];

  componentWillLoad() {
    const inputs = Array.from(this.el.querySelectorAll('erik-radio-button'));
    if (inputs) {
      this.inputs = inputs.map(input => {
        input.name = this.name;
        input.scale = this.scale;
        return input;
      });
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
