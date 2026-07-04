import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    target: "es2019",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-three": ["three", "three-stdlib"],
          "vendor-r3f": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
          ],
          "vendor-gsap": ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
