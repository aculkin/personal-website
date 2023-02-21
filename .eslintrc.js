module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "@typescript-eslint"],
	settings: {
		react: {
			version: "detect",
		},
	},
	extends: [
		"airbnb-base",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	rules: {
		"prettier/prettier": "error",
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
	},
	overrides: [
		{
			files: ["**/*.tsx", "**/*.ts"],
			rules: {
				"react/prop-types": "off",
			},
		},
	],
};
