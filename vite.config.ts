// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Heroku runs a normal Node process, so use Nitro's Node server preset
  // instead of the default Cloudflare worker output.
  nitro: {
    preset: "node-server",
    rolldownConfig: {
      onLog(level, log, defaultHandler) {
        if (log.code === "MODULE_LEVEL_DIRECTIVE" || log.message?.includes("use client")) {
          return;
        }
        defaultHandler(level, log);
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE" || warning.message?.includes("use client")) {
          return;
        }
        defaultHandler(warning);
      },
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    server: { allowedHosts: true },
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVE" ||
            warning.message?.includes("use client")
          ) {
            return;
          }
          defaultHandler(warning);
        },
      },
    },
  },
});
