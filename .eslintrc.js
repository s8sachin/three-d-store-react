module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    indent: [
      'error',
      2,
      { MemberExpression: 0 },
    ],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx'],
    }],
    'react/prefer-stateless-function': [{
      ignorePureComponents: true,
    }],
    'react/jsx-one-expression-per-line': false,
    'react/prop-types': [
      'enabled',
    ],
  },
};
