import { r as registerInstance, h, H as Host, c as getElement } from './core-1acfe7b3.js';

const RadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        const inputs = Array.from(this.el.querySelectorAll('erik-radio-button'));
        if (inputs) {
            this.inputs = inputs.map(input => {
                input.name = this.name;
                return input;
            });
        }
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: -ms-flexbox;\n  display: flex;\n}\n:host([vertical]) {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}"; }
};

export { RadioGroup as erik_radio_group };