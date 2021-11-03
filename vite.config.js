import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "./ui-src",
  plugins: [vue(), viteSingleFile(), reactRefresh()],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    outDir: "../dist",
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
      },
    },
  },
});