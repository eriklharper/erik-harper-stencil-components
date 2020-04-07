import { Component, Host, h, Listen, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'erik-radio-button',
  styleUrl: 'radio-button.css',
  // shadow: true
})
export class RadioButton {

  @Element() el: HTMLElement;

  @Prop({ reflect: true }) checked: boolean = false;
  @Prop() name: string;
  @Prop() scale: "small" | "medium" | "large" = "small";
  @Prop() value: string;

  @Event()
  onRadioButtonClick: EventEmitter;

  @Listen("click")
  onClick(event: MouseEvent): void {
    if ((event.currentTarget as HTMLErikRadioButtonElement).localName === "erik-radio-button") {
      this.onRadioButtonClick.emit();
    }
  }

  // renderInputOutsideShadowRoot = (container: HTMLElement, id: string) => {
  //   let input = container.querySelector("input[type='radio']") as HTMLInputElement | null;
  //   if (!input) {
  //     input = container.ownerDocument.createElement("input");
  //     input.type = "radio";
  //     container.appendChild(input);
  //   }
  //   input.checked = this.checked;
  //   input.id = id;
  //   input.name = this.name;
  //   input.value = this.value;
  // }

  render() {
    const id = `${this.name}.${this.value}`;
    // this.renderInputOutsideShadowRoot(this.el, id);
    return (
      <Host role="radio" aria-checked={this.checked} scale={this.scale}>
        <input id={id} type="radio" name={this.name} checked={this.checked} value={this.value}></input>
        <span id="radio" class={`${this.scale} ${this.checked && "checked"}`} tabindex="-1"></span>
        <label htmlFor={id}>
          <slot></slot>
        </label>
      </Host>
    );
  }
}
