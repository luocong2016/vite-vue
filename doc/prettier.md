# 解决问题

1. 多人开发代码语法、规范强制统一

# 安装

```sh
## eslint
yarn add -D eslint

## eslint plugins
yarn add -D eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier

## typescript parser
yarn add -D  @typescript-eslint/parser

## prettier
yarn add -D prettier

## eslint 和 prettier 冲突
yarn add -D eslint-config-prettier
```

# 配置

## `prettierrc.js`

```
module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid'
}
```

## `.editorconfig`

```
root = true

[*]

charset = utf-8
indent_size = 2
indent_style = space
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
indent_style = tab
```

## `.eslintrc.js`

```js
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	parser: 'vue-eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'no-var': 'error',
		allowEmptyCatch: 'off',
		'prettier/prettier': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		// 针对模版中未使用的变量
		'vue/no-unused-vars': [
			'error',
			{
				ignorePattern: '^_'
			}
		]
	},
	globals: {
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly'
	}
}
```

## `.eslintignore`

```sh
node_modules
dist
types
.vscode
.husky
*.woff
*.ttf
*.sh
*.svg
```

## `package.json`

```json
{
	"script": {
		"lint": "eslint \"src/**/*\" --fix",
		"prettier": "prettier --write ."
	}
}
```
