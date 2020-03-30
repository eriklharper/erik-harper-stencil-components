import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'erik-animated-progress-bar',
  styleUrl: 'animated-progress-bar.css',
  shadow: true
})
export class AnimatedProgressBar {

  @Prop() progress = 0;

  render() {
    return (
      <Host>
        <div style={{ width: `${this.progress}%`}}></div>
        <slot></slot>
      </Host>
    );
  }

}
