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
  disabled = false;

  @Prop({ reflect: true })
  tabIndex = 0;

  @Listen("click") onClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  render() {
    return (
      <Host role="checkbox" aria-checked={this.checked} aria-disabled={this.disabled} tabindex={this.tabIndex}>
        <div class={{ "toggle-circle-container": true, "on": this.checked, "off": !this.checked, "disabled": this.disabled }}>
          <div class="toggle-circle"></div>
        </div>
      </Host >
    );
  }

}
