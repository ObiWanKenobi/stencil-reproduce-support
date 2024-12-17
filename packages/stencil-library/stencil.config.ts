import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    reactOutputTarget({
      outDir: '../react-library/src/components/stencil-generated/',
      stencilPackageName: 'stencil-library',
      esModules: true,
    }),
  ]
};
