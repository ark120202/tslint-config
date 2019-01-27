module.exports = {
  extends: ['tslint-react', 'tslint-config-prettier'],
  rules: {
    'jsx-no-multiline-js': false,
    // Prettier
    'jsx-self-close': false,

    // FIXME: https://github.com/palantir/tslint-react/issues/120
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',

      'allow-pascal-case',
    ],
  },
};
