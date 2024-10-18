import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	{
		files: ["**/*.{js,ts,vue}"],
		rules: {
			"prettier/prettier": "error",
		},
	},
	{
		languageOptions: {
			globals: {
				// Другие глобальные переменные, если необходимо
			},
		},
	},
	"plugin:prettier/recommended", // Добавьте эту строку
];
