import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import fs from 'fs';
import path from 'path';

// Helper to load component HTML files
function loadComponent(componentPath) {
  const fullPath = path.resolve(__dirname, 'src/components', componentPath);
  return fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf-8') : '';
}

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          animations: ['./src/scripts/animations.js'],
          quiz: ['./src/scripts/quiz.js']
        }
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          // Components will be injected here
          header: () => loadComponent('Header.html'),
          hero: () => loadComponent('Hero.html'),
          videoStyleQuiz: () => loadComponent('VideoStyleQuiz.html'),
          trustMetrics: () => loadComponent('TrustMetrics.html'),
          heroCollage: () => loadComponent('HeroCollage.html'),
          portfolio: () => loadComponent('Portfolio.html'),
          solutions: () => loadComponent('Solutions.html'),
          process: () => loadComponent('Process.html'),
          creativeControlRoom: () => loadComponent('CreativeControlRoom.html'),
          globalStorytelling: () => loadComponent('GlobalStorytelling.html'),
          support: () => loadComponent('Support.html'),
          footer: () => loadComponent('Footer.html')
        }
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  }
});
