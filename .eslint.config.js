import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next", "next/typescript", "eslint:recommended"),
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      project: "./tsconfig.json",
    },
    env: {
      es6: true,
      browser: true,
      node: true,
    },
    plugins: ["@typescript-eslint"],
    rules: {
      // Add any custom rules here
    },
  },
];

export default eslintConfig;