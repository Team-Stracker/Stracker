import { defineConfig } from "eslint-define-config";
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default defineConfig([
  {
    languageOptions: {
      parser: typescriptParser, // 정확한 파서 객체 지정
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        React: "readonly",
      },
    },
    extends: [
      "eslint:recommended", // 기본 ESLint 규칙
      "plugin:react/recommended", // React 관련 규칙
      "plugin:@typescript-eslint/recommended", // TypeScript 관련 규칙
      "plugin:prettier/recommended", // Prettier와 충돌 방지 및 스타일 적용
    ],
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error", // Prettier 규칙을 ESLint 규칙으로 처리
    },
  },
  {
    // TypeScript 파일에만 적용될 규칙
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
]);
