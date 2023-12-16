import type { Config } from "prismic-ts-codegen";

const config: Config = {
  output: "./lib/types.generated.ts",
  models: ["./lib/prismic/customTypes/*.json"]
};

export default config;
