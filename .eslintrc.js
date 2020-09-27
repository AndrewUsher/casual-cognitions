module.exports = {
  parser: 'babel-eslint',
  extends: ['@drewster/eslint-config/react'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0
  }
}
