import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-0014cdee.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["erik-animated-progress-bar",[[1,"erik-animated-progress-bar",{"progress":[514]}]]],["erik-toggle-button",[[1,"erik-toggle-button",{"checked":[516],"disabled":[516],"tabIndex":[514,"tab-index"]},[[0,"click","onClick"]]]]]], options);
});
