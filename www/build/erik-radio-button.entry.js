import { r as registerInstance, h, H as Host } from './core-1acfe7b3.js';

const RadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.scale = "small";
    }
    render() {
        return (h(Host, { role: "radio", "aria-checked": this.checked, scale: this.scale }, h("input", { id: `${this.name}.${this.value}`, type: "radio", name: this.name, checked: this.checked, value: this.value }), h("span", { id: "radio", class: `${this.scale} ${this.checked && "checked"}` }), h("label", { htmlFor: `${this.name}.${this.value}` }, h("slot", null))));
    }
    static get style() { return ":root {\n  --radio-default: #c2c2c2;\n  --radio-blue: #029fff;\n}\n:host {\n  display: block;\n  cursor: pointer;\n}\ninput[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n}\n#radio {\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-box-shadow: inset 0 0 0 1px var(--radio-default);\n  box-shadow: inset 0 0 0 1px var(--radio-default);\n}\n#radio.small {\n  height: 14px;\n  width: 14px;\n}\n#radio.medium {\n  height: 18px;\n  width: 18px;\n}\n#radio.large {\n  height: 22px;\n  width: 22px;\n}\ninput[type=radio]:focus + label {\n  outline: rgba(77, 97, 171, 0.5) auto 3px;\n}\ninput[type=radio]:focus + #radio {\n  -webkit-box-shadow: inset 0 0 0 2px var(--radio-blue);\n  box-shadow: inset 0 0 0 2px var(--radio-blue);\n}\n#radio.checked {\n  -webkit-box-shadow: inset 0 0 0 5px var(--radio-blue);\n  box-shadow: inset 0 0 0 5px var(--radio-blue);\n}\ninput[type=radio]:focus + #radio.checked {\n  -webkit-box-shadow:\n    inset 0 0 0 5px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 2px var(--radio-blue);\n  box-shadow:\n    inset 0 0 0 5px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 2px var(--radio-blue);\n}"; }
};

export { RadioButton as erik_radio_button };
