import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import renderer from "vite-plugin-electron-renderer";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: __dirname,
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    target: "esnext",
  },
  server: {
    port: 9000,
  },
  pages: {
    "/": {
      entry: "src/index.tsx",
      template: "public/index.html",
    },
  },
  plugins: [
    // The plugin below is required for hot reloading React application.
    react(),
    // The plugin below is required for typescript support in Vite.
    require("vite-plugin-ts")({
      tsconfig: "tsconfig.json",
    }),
    // The plugin below is required for importing SVG files as React components.
    require("vite-plugin-svgr")(),
    // The plugin below is required for using Node modules in the renderer process.
    renderer({
      nodeIntegration: true,
    }),
    // // The plugin below is required for compiling the react app into a single page so it can be run as a file.
    viteSingleFile({
      useRecommendedConfig: true, // Update the configuration here
    }),
  ],
});
