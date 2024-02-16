import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['lcov', 'html'],
      reportOnFailure: true,
      exclude: ['**/*.stories*', '**vitest**'],
      allowExternal: true,
    },
    testTimeout: 60000,
    reporters: ['verbose'],
    passWithNoTests: true,
    deps: {
      moduleDirectories: ['node_modules', path.resolve('../../packages')],
    },
    server: {
      deps: {
        external: ['is-even'],
      }
    }
  },
});
