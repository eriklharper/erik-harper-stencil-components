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
  @State() inputs: HTMLErikRadioButtonElement[];

  componentWillLoad() {
    const inputs = Array.from(this.el.querySelectorAll('erik-radio-button'));
    if (inputs) {
      this.inputs = inputs.map(input => {
        input.name = this.name;
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
