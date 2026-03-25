import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages обычно отдаёт сайт по пути: /<repo>/
  // В workflow мы прокидываем VITE_BASE_URL = "/<repo>/".
  base: (() => {
    const raw = process.env.VITE_BASE_URL;
    const trimmed = raw?.trim();

    // Локальная сборка (без VITE_BASE_URL)
    if (!trimmed) return "/";

    // Vite требует leading slash, поэтому добавляем его при необходимости.
    const withLeadingSlash = trimmed.startsWith("/")
      ? trimmed
      : `/${trimmed}`;

    // Нормализуем: base почти всегда удобнее с trailing slash для сборки.
    return withLeadingSlash.endsWith("/")
      ? withLeadingSlash
      : `${withLeadingSlash}/`;
  })(),
});
