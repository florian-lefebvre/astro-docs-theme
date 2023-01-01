import type { Config } from "./types";

export const configDefaults: Required<Config> = {
  title: "Docs",
  defaultLocale: "en",
};

export function defineConfig(config: Partial<Config>): Config {
  return { ...config, ...configDefaults };
}
