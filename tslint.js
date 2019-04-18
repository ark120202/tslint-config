// https://github.com/palantir/tslint/blob/e78f9c233935ea071fbc6bec1f67336eac1f9e41/src/configs/latest.ts
const latestOverrides = {
  forin: false,
  'max-classes-per-file': false,
  'array-type': [true, 'array'],
  'no-console': false,
  'no-empty': [true, 'allow-empty-catch', 'allow-empty-functions'],
  'no-implicit-dependencies': [true, 'dev'],
  'interface-name': false,
  // TODO:
  // 'object-literal-sort-keys': [true, 'match-declaration-order-only'],
  'only-arrow-functions': [true, 'allow-declarations'],
  'no-empty-interface': false,
  'no-submodule-imports': false,
  'no-implicit-dependencies': [true, 'dev', 'optional'],
  'no-namespace': [true, 'allow-declarations'],
  'member-ordering': false,
  'no-bitwise': false,
  'prefer-const': [true, { destructuring: 'all' }],

  curly: [true, 'ignore-same-line'],
  'no-this-assignment': [true, 'allow-destructuring'],
  'variable-name': [
    true,
    'ban-keywords',
    'check-format',
    'allow-leading-underscore',
    'require-const-for-all-caps',
  ],
};

const coreRules = {
  deprecation: true,
  encoding: true,
  'prefer-template': [true, 'allow-single-concat'],
  'no-boolean-literal-compare': true,
  // FIXME: https://github.com/palantir/tslint/issues/3419
  // 'no-redundant-jsdoc': true,
  'max-file-line-count': [true, 1000],
  'no-floating-promises': true,
  'prefer-method-signature': true,
  'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  'binary-expression-operand-order': true,
  'promise-function-async': true,
  'no-require-imports': true,
  'no-unnecessary-type-assertion': true,
  'no-inferred-empty-object-type': true,
  'await-promise': [true, 'RequestPromise'],
  'no-for-in-array': true,
  'restrict-plus-operands': true,
  'no-inferrable-types': true,
  // TODO:
  // 'strict-boolean-expressions': [
  //   true,
  //   'allow-null-union',
  //   'allow-undefined-union',
  //   'allow-mix',
  //   'ignore-rhs',
  // ],
  'use-default-type-parameter': true,
  'no-unnecessary-class': true,
  'prefer-switch': true,
  'no-restricted-globals': true,
  'no-tautology-expression': true,
  'static-this': true,
  'unnecessary-else': true,
  'increment-decrement': true,

  // FIXME: https://github.com/palantir/tslint/issues/2430
  // 'no-unnecessary-callback-wrapper': true,

  // TODO:
  // 'completed-docs': [true, 'classes', 'functions', 'methods'],
  // 'no-magic-numbers': true,
  // 'no-default-export': true,
  // 'switch-default': true,
  // 'no-unsafe-any': true,
  // 'no-unbound-method': [true, 'ignore-static'],
};

const microsoftContrib = {
  'prefer-array-literal': true,
  'function-name': [
    true,
    {
      'method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'private-method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'protected-method-regex': /^_?[a-z][a-zA-Z\d]*$/,
      'static-method-regex': /^_?[a-z][a-zA-Z\d]*$/,

      // variable-name
      'function-regex': /.*/,
    },
  ],
};

const consistentCodestyle = {
  'early-exit': [true, { 'max-length': 5 }],
  'no-accessor-recursion': true,
  'no-collapsible-if': true,
  'no-return-undefined': true,
  'no-static-this': true,
  'prefer-while': true,
};

module.exports = {
  extends: ['tslint:latest', 'tslint-config-prettier', 'tslint-plugin-prettier'],
  rules: Object.assign(
    { prettier: true },
    latestOverrides,
    coreRules,
    microsoftContrib,
    consistentCodestyle,
  ),
};
