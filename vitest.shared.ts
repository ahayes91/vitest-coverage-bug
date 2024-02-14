import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 70,
        lines: 80,
      },
      reporter: ['lcov'],
      reportOnFailure: true,
      exclude: ['**/*.stories*'],
    },
    testTimeout: 60000,
    reporters: ['verbose'],
    passWithNoTests: true,
  },
});
