import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginCypress from 'eslint-plugin-cypress'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,

  // ✅ Ajout pour Cypress
  {
    name: 'cypress/tests',
    files: ['**/*.cy.js'],
    plugins: {
      cypress: pluginCypress,
    },
    languageOptions: {
      globals: {
        ...pluginCypress.environments.globals,
        describe: 'readonly',
        it: 'readonly',
        cy: 'readonly',
      },
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
    },
  },
]
