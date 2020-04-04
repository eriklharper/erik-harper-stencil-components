import { r as registerInstance, h, H as Host } from './core-e9d777d8.js';

const AnimatedProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.progress = 0;
    }
    render() {
        return (h(Host, null, h("div", { style: { width: `${this.progress}%` } }), h("slot", null)));
    }
    static get style() { return ":host {\n  display: block;\n  height: 4px;\n  width: 100%;\n  border: 1px solid #CCC;\n}\n :host([hidden]) { display: none }\ndiv {\n  height: 100%;\n  background-color: blue;\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s;\n}"; }
};

export { AnimatedProgressBar as erik_animated_progress_bar };
