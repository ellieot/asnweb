/*
 * @Author: resunoon
 * @Date: 2021-12-18 06:52:48
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 0,
    'no-use-before-define': 0,
    'no-mixed-spaces-and-tabs': 0,
    'global-require': 0,

  },
};
