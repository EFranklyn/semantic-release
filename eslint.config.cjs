module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/no-unused-vars': 'warn',
    'vue/no-multiple-template-root': 'off',
  },
}
