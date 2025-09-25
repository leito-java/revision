/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
       excludedFiles: ["index.html"], 
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint', '@angular-eslint', 'prettier'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@angular-eslint/recommended',
        'plugin:prettier/recommended'
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'app', style: 'camelCase' }
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'app', style: 'kebab-case' }
        ],
        'prettier/prettier': 'error',
      }
    },
    {
      files: ['*.html'],
      plugins: ['@angular-eslint/template'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility'
      ],
      rules: {
        'prettier/prettier': 'error',
      }
    }
  ]
};
