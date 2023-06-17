import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react()],
  resolve: {
    alias: {
      "@/api:": path.resolve(__dirname, "src/api"),
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: "https://api.themoviedb.org",
        changeOrigin: true,
      },
    },
  },
});
