/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript', // the following lines do the trick
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	],
	/* Some airbnb rules are too restrictive, we override them */
	rules: {
		/* Overrides for eslint-plugin-import */

		/* ---- Prefer named exports */
		'import/no-default-export': 1,
		'import/prefer-default-export': 0,
		'import/no-unresolved': 0,
		/* ---- Order imports */
		'import/order': [
			2,
			{
				'newlines-between': 'ignore' /* Newline between groups of imports */,
				pathGroups: [
					{
						pattern: '/**',
						group: 'parent',
						position: 'before'
					}
				] /* Place "/src/..." imports before "parent" imports */,
				alphabetize: {
					order: 'asc' /* Sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
					caseInsensitive: true /* Ignore case. Options: [true, false] */
				}
			}
		],

		'sort-imports': [
			2,
			{ ignoreCase: true, ignoreDeclarationSort: true }
		] /* Sort import members: { b, A, c } => { A, b, c } */
	}
};
