import { r as registerInstance, h, H as Host } from './core-1acfe7b3.js';

const RadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checked = false;
    }
    render() {
        return (h(Host, { role: "radio", "aria-checked": this.checked, scale: this.scale }, h("label", null, h("input", { type: "radio", name: this.name, checked: this.checked }), h("slot", null))));
    }
    static get style() { return "::slotted(input) {\n  display: none;\n}"; }
};

export { RadioButton as erik_radio_button };
