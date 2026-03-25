import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: (() => {
    const raw = process.env.VITE_BASE_URL;
    const rawTrimmed = raw?.trim();

    if (!rawTrimmed) return "/";

    return rawTrimmed;
  })()
});
