import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './core-e9d777d8.js';

const RadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
        this.scale = "small";
        this.onRadioButtonClick = createEvent(this, "onRadioButtonClick", 7);
    }
    onClick(event) {
        if (event.currentTarget.localName === "erik-radio-button") {
            this.onRadioButtonClick.emit();
        }
    }
    render() {
        const id = `${this.name}.${this.value}`;
        return (h(Host, { role: "radio", "aria-checked": this.checked, scale: this.scale }, h("input", { id: id, type: "radio", name: this.name, checked: this.checked, value: this.value }), h("span", { id: "radio", class: `${this.scale} ${this.checked && "checked"}`, tabindex: "-1" }), h("label", { htmlFor: id }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ":root {\n  --radio-default: #c2c2c2;\n  --radio-blue: #029fff;\n}\nerik-radio-button,\nerik-radio-button > label {\n  cursor: pointer;\n}\ninput[type=\"radio\"] {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n#radio {\n  display: inline-block;\n  border-radius: 100%;\n  -webkit-box-shadow: inset 0 0 0 1px var(--radio-default);\n  box-shadow: inset 0 0 0 1px var(--radio-default);\n  outline: none;\n}\n\n/* Small (Default) */\n#radio.small {\n  height: 14px;\n  width: 14px;\n}\n#radio.small.checked {\n  -webkit-box-shadow: inset 0 0 0 5px var(--radio-blue);\n  box-shadow: inset 0 0 0 5px var(--radio-blue);\n}\n#radio.small.checked:focus,\ninput[type=radio]:focus + #radio.small.checked {\n  outline: none;\n  -webkit-box-shadow:\n    inset 0 0 0 5px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n  box-shadow:\n    inset 0 0 0 5px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n}\n\n/* Medium */\n#radio.medium {\n  height: 18px;\n  width: 18px;\n}\n#radio.medium.checked {\n  -webkit-box-shadow: inset 0 0 0 6px var(--radio-blue);\n  box-shadow: inset 0 0 0 6px var(--radio-blue);\n}\n#radio.medium.checked:focus,\ninput[type=radio]:focus + #radio.medium.checked {\n  outline: none;\n  -webkit-box-shadow:\n    inset 0 0 0 6px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n  box-shadow:\n    inset 0 0 0 6px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n}\n\n/* Large */\n#radio.large {\n  height: 22px;\n  width: 22px;\n}\n#radio.large.checked {\n  -webkit-box-shadow: inset 0 0 0 7px var(--radio-blue);\n  box-shadow: inset 0 0 0 7px var(--radio-blue);\n}\n#radio.large.checked:focus,\ninput[type=radio]:focus + #radio.large.checked {\n  outline: none;\n  -webkit-box-shadow:\n    inset 0 0 0 7px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n  box-shadow:\n    inset 0 0 0 7px var(--radio-blue),\n    0 0 0 1px white,\n    0 0 0 3px var(--radio-blue);\n}"; }
};

export { RadioButton as erik_radio_button };
