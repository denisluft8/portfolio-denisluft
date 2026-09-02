import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Publicado em https://denisluft8.github.io/portfolio-denisluft/
  // Com domínio próprio, troque para "/".
  base: "/portfolio-denisluft/",
  plugins: [
    react({
      // Nomes de classe legíveis no DevTools e melhor SSR-safety do styled-components
      babel: { plugins: [["babel-plugin-styled-components", { displayName: true, fileName: false }]] },
    }),
  ],
  build: {
    target: "es2020",
    // Os vídeos de preview precisam virar arquivos próprios, nunca data-URI
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
