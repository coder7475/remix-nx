import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run myapp:dev',
        production: 'npx nx run myapp:serve-static',
      },
      ciWebServerCommand: 'npx nx run myapp:serve-static',
      ciBaseUrl: 'http://localhost:3000',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
