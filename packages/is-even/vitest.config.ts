import { defineProject, mergeConfig } from 'vitest/config';

import baseTestConfig from '../../vitest.shared';

const config = defineProject({
  test: {
    environment: 'happy-dom',
    globals: true,
    clearMocks: true,
    include: ['**/*.test.[t]s?(x)'],
  },
});

export default mergeConfig(baseTestConfig, config);
