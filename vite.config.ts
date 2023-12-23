import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/legislator-campaign-site/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@img": resolve(__dirname, "src/assets/images"),
      "@icon": resolve(__dirname, "src/assets/icons"),
    },
  },
});
