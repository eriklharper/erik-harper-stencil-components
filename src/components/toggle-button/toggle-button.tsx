import { Component, Host, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'erik-toggle-button',
  styleUrl: 'toggle-button.css',
  shadow: true
})
export class ToggleButton {

  @Prop({ reflect: true })
  checked = false;

  @Prop({ reflect: true })
  tabIndex = 0;

  @Listen("click") onClick() {
    this.checked = !this.checked;
  }

  render() {
    const style = this.checked ? { left: "1px" } : { right: "1px" }
    return (
      <Host class={this.checked ? "on" : "off"} role="checkbox" aria-checked={this.checked} tabindex={this.tabIndex}>
        <div class="toggle-circle-container">
          <div class="toggle-circle" style={style}></div>
        </div>
      </Host >
    );
  }

}
