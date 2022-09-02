module.exports = {
  root: true,
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  "extends": [
    "standard",
    "eslint:recommended"
  ],
  "rules": {
    'no-extra-semi': 2,
    'quotes': [2, 'single']
  },
  parser: 'babel-eslint'
};