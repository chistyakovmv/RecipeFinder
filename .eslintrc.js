module.exports = {
  extends: ["next", "eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react-hooks/exhaustive-deps": "off",
  },
};
