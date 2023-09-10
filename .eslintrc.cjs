/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */

module.exports = {
  extends: ['upleveled'],
  rules: {
    "no-use-before-define": ["error", { "variables": true, "functions": true, "classes": true, "ignorePattern": "^styles$" }]
    // disable the rule for "style"-variables, which are sometimes defined after the call in react native
  },
};
