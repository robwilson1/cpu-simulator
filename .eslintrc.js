module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"prettier",
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2019,
		"sourceType": "module"
	},
	"plugins": [
		"svelte3",
		"prettier"
	],
	overrides: [
		{
		  files: ['**/*.svelte'],
		  processor: 'svelte3/svelte3'
		}
	],
	"rules": {
		"prettier/prettier": "error",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
