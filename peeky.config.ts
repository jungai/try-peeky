import { defineConfig } from "@peeky/test";

export default defineConfig({
  match: ["**/__tests__/**/*.spec.ts"],
  ignored: ["**/node_modules/**", "**/src/**/*.ts"],
  // runtimeEnv: 'node', defailt is node
  setupFiles: ["./node_modules/dotenv/config"],
});
