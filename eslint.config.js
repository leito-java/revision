// @ts-check
// Import des modules ESLint, typescript-eslint et angular-eslint nécessaires
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

// Export de la configuration ESLint via typescript-eslint
module.exports = tseslint.config({
  // Overrides permet de définir plusieurs configurations ciblant différents types de fichiers
  overrides: [
    {
      // Cette config s’applique à tous les fichiers TypeScript (*.ts)
      files: ["**/*.ts"],
      // Étend des configurations recommandées et stylistiques de ESLint, TypeScript et Angular
      extends: [
        eslint.configs.recommended,          // règles recommandées générales ESLint
        ...tseslint.configs.recommended,     // règles recommandées spécifiques TypeScript
        ...tseslint.configs.stylistic,       // règles stylistiques TypeScript
        ...angular.configs.tsRecommended,    // règles recommandées Angular pour TS
        require("eslint-plugin-prettier").configs.recommended // ajoute Prettier pour formater le code TS
      ],
      // Permet de traiter les templates inline Angular dans les fichiers TS
      processor: angular.processInlineTemplates,
      // Définition de règles personnalisées spécifiques au projet
      rules: {
        // Forcer un style pour les sélecteurs des directives Angular (attributs camelCase avec préfixe 'app')
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        // Forcer un style pour les sélecteurs des composants Angular (éléments kebab-case avec préfixe 'app')
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        // Faire échouer ESLint si Prettier détecte un problème de formatage dans les fichiers TS
        "prettier/prettier": "error"
      },
    },
    {
      // Cette config s’applique aux fichiers HTML (templates Angular)
      files: ["**/*.html"],
      // Étend des règles recommandées et d'accessibilité pour templates Angular
      extends: [
        ...angular.configs.templateRecommended,    // règles recommandées Angular pour templates
        ...angular.configs.templateAccessibility, // règles d’accessibilité Angular pour templates
      ],
      // Règles personnalisées pour les fichiers HTML
      rules: {
        // Faire échouer ESLint si Prettier détecte un problème de formatage dans les templates HTML
        "prettier/prettier": "error"
      },
    }
  ]
});
