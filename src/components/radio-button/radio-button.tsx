import { Component, Host, h, Listen, Prop, Event, EventEmitter, Watch, Element } from '@stencil/core';

@Component({
  tag: 'erik-radio-button',
  styleUrl: 'radio-button.css',
})
export class RadioButton {

  @Element()
  el: HTMLElement;

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

  render() {
    const id = `${this.name}.${this.value}`;
    return (
      <Host role="radio" aria-checked={this.checked} scale={this.scale}>
        <input id={id} type="radio" name={this.name} checked={this.checked} value={this.value}></input>
        <span id="radio" class={`${this.scale} ${this.checked && "checked"}`} tabindex="-1"></span>
        <label htmlFor={id}>
          <slot></slot>
        </label>
      </Host >
    );
  }
}
