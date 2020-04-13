import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-starter-project-name',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [{ src: "lit-components", dest: "components" }, { src: "demos", dest: "demos" }],
      serviceWorker: null // disable service workers
    }
  ]
};
