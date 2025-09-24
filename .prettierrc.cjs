// .prettierrc.cjs

/** 
 * @type {import("prettier").Config} 
 * ➤ Active la vérification de type dans les éditeurs compatibles (comme VS Code)
 */
module.exports = {
  // ✅ Utilise des guillemets simples au lieu des guillemets doubles : '...' au lieu de "..."
  singleQuote: true,

  // ✅ Ajoute un point-virgule à la fin de chaque instruction
  semi: true,

  // ✅ Limite chaque ligne à 100 caractères maximum
  // Cela améliore la lisibilité, surtout sur écran partagé
  printWidth: 100,

  // ✅ Ajoute une virgule finale dans les objets/arrays/multilignes si possible (ES5)
  // Cela facilite les diffs Git en cas de modification future
  trailingComma: 'es5',

  // ✅ Ajoute un espace entre les accolades : { nom: 'Amine' } au lieu de {nom: 'Amine'}
  bracketSpacing: true,

  // ✅ Place la fermeture de balise HTML/JSX sur une nouvelle ligne si le contenu est multilignes
  bracketSameLine: false,

  // ✅ Ajoute automatiquement des parenthèses autour des arguments des fonctions fléchées
  // Exemple : `(x) => x + 1` même s’il y a un seul argument
  arrowParens: 'always',

  // ✅ Force l’utilisation de l’extension `.ts` dans les imports (optionnel, selon ton projet)
  // utile si tu bosses dans des monorepo ou avec ES modules stricts
  // plugins: ["prettier-plugin-import-sort"], // si tu ajoutes des plugins comme import-sort
};
