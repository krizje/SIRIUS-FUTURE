import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    endOfLine: 'auto',
                },
            ],
        },
    },
    {
        rules: {
            'no-console': 'warn',
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
];
