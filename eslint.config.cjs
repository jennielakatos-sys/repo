module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    rules: {
      "no-unused-vars": ["warn"],
      "no-console": "off",
      semi: ["error", "always"],
      "react/prop-types": "off",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": ["error"],
      curly: "error",
      "dot-notation": "warn",
      "no-implicit-coercion": "warn",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "error",
    },
  },
];
