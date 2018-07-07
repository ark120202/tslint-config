module.exports = {
  extends: ['tslint-react'],
  rules: {
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
  }
};
