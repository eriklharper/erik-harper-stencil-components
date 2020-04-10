import { Component, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'erik-form',
  styleUrl: 'form.css',
  scoped: true,
})
export class Form {

  form!: HTMLFormElement;

  @Listen('submit')
  onFormSubmit(event: Event) {
    event.preventDefault();
    new FormData(this.form);
  }
  
  @Listen("formdata")
  onFormData(event: any) {
    let data = {};
    for (var pair of event.formData.entries()) {
      data[pair[0]] = pair[1];
    }
    alert(`Submitted with Form Data: ${JSON.stringify(data)}`)
  }

  render() {
    return (
      <Host>
        <form ref={el => (this.form = el as HTMLFormElement)}>
          <slot></slot>
        </form>
      </Host>
    );
  }

}
