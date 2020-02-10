module.exports = {
  parser: 'babel-eslint',
  extends: ['@drewster'],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0
  }
}
