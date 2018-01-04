module.exports = {
  extends: ['tslint-config-airbnb', 'tslint-config-prettier'],
  rulesDirectory: ['tslint-plugin-prettier'],
  rules: {
    'import-name': false,
    'no-parameter-reassignment': false,
    prettier: true,
  },
};
