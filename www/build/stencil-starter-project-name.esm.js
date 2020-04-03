import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-1acfe7b3.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["erik-animated-progress-bar",[[1,"erik-animated-progress-bar",{"progress":[514]}]]],["erik-radio-button",[[4,"erik-radio-button",{"checked":[4],"name":[1],"scale":[1]}]]],["erik-radio-group",[[1,"erik-radio-group",{"label":[1],"name":[1],"inputs":[32]}]]],["erik-toggle-button",[[1,"erik-toggle-button",{"checked":[516],"disabled":[516],"tabIndex":[514,"tab-index"]},[[0,"click","onClick"]]]]]], options);
});
