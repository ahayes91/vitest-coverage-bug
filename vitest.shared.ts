import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['lcov', 'html'],
      reportOnFailure: true,
      exclude: ['**/*.stories*', '**vitest**'],
    },
    testTimeout: 60000,
    reporters: ['verbose'],
    passWithNoTests: true,
  },
});
