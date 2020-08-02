module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx']
      }
    ]
  }
}
