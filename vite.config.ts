import { defineConfig }         from 'vite';
import angular                  from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [
    angular(),
  ],
  ssr: {
    // Force these packages to be bundled / transformed as ESM
    noExternal: [
      'rxjs',
      'rxjs/operators',
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/router',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
    ],
  },
});