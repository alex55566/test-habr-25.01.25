import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/mixins.scss" as *;
          @use "@/styles/var.scss" as *;
          @use "@/styles/function.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@/enum": path.resolve(__dirname, "./src/enum"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/helpers": path.resolve(__dirname, "./src/helpers"),
    },
  },
});
