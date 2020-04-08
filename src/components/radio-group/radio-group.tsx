import { Component, Host, h, Element, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'erik-radio-group',
  styleUrl: 'radio-group.css',
  shadow: true
})
export class RadioGroup {
  @Element() el!: HTMLElement;

  @Prop() name: string;
  @Prop() scale: "small" | "medium" | "large" = "small";
  @Prop({ reflect: true }) vertical: boolean = false;

  @Listen("onRadioButtonClick")
  onRadioButtonClick(event: CustomEvent): void {
    this.el.querySelectorAll("erik-radio-button").forEach(radioButton => radioButton.checked = false);
    (event.target as HTMLErikRadioButtonElement).checked = true;
    (event.target as HTMLErikRadioButtonElement).focused = true;
  }

  @Listen("onRadioButtonFocus")
  onRadioButtonFocus(event: CustomEvent) {
    (event.target as HTMLErikRadioButtonElement).checked = true;
    (event.target as HTMLErikRadioButtonElement).focused = true;
  }

  @Listen("onRadioButtonBlur")
  onRadioButtonBlur(event: CustomEvent) {
    (event.target as HTMLErikRadioButtonElement).focused = false;
  }

  componentWillLoad() {
    this.passPropsToRadioButtons();
  }

  passPropsToRadioButtons = () => {
    const radioButtons = Array.from(this.el.querySelectorAll('erik-radio-button'));
    if (radioButtons) {
      radioButtons.forEach(radioButton => {
        radioButton.name = this.name;
        radioButton.scale = this.scale;
        return radioButton;
      });
    }
  }

  render() {
    return (
      <Host scale={this.scale} vertical={this.vertical}>
        <slot></slot>
      </Host>
    );
  }
}
