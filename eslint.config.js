module.exports = {
  extends: ["eslint:recommended"],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: 6,
    sourceType: "module",
  },
  rules: {
    "no-var": 2,
  },
};
