import { r as registerInstance, h, H as Host } from './core-0014cdee.js';

const ToggleButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.disabled = false;
        this.tabIndex = 0;
    }
    onClick() {
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    }
    render() {
        return (h(Host, { role: "checkbox", "aria-checked": this.checked, "aria-disabled": this.disabled, tabindex: this.tabIndex }, h("div", { class: { "toggle-circle-container": true, "on": this.checked, "off": !this.checked, "disabled": this.disabled } }, h("div", { class: "toggle-circle" }))));
    }
    static get style() { return ":host {\n  display: block;\n  cursor: pointer;\n  border-radius: 500px;\n}\n :host([hidden]) { display: none }\n\n .toggle-circle-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 50px;\n  height: 27px;\n  border-radius: 500px;\n  border: 1px solid blue;\n}\n.toggle-circle-container.on {\n  background-color: blue;\n}\n.toggle-circle-container.off {\n  background-color: white;\n}\n.toggle-circle-container.disabled {\n  background-color: #CCC;\n  border-color: #333;\n}\n\n.toggle-circle {\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  -webkit-transition: -webkit-transform 0.1s ease;\n  transition: -webkit-transform 0.1s ease;\n  transition: transform 0.1s ease;\n  transition: transform 0.1s ease, -webkit-transform 0.1s ease;\n}\n.off .toggle-circle {\n  background-color: blue;\n  -webkit-transform: translateX(2px);\n  transform: translateX(2px);\n}\n.on .toggle-circle {\n  background-color: white;\n  -webkit-transform: translateX(24px);\n  transform: translateX(24px);\n}\n.disabled .toggle-circle {\n  background-color: #666;\n}"; }
};

export { ToggleButton as erik_toggle_button };
