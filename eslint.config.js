import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJSXA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import eslintParserTypeScript from '@typescript-eslint/parser';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{jsx,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: eslintParserTypeScript,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            '@typescript-eslint': eslintPluginTypeScript,
            'unused-imports': eslintPluginUnusedImports,
            prettier: eslintPluginPrettier,
            import: eslintPluginImport,
            'jsx-a11y': eslintPluginJSXA11y,
        },
        rules: {
            ...pluginReact.configs.recommended.rules,
            ...pluginReactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'no-process-env': 'error',
            'no-underscore-dangle': 'off',
            '@typescript-eslint/no-base-to-string': 'error',
            '@typescript-eslint/no-unnecessary-type-constraint': 'off',
            'jsx-a11y/label-has-for': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/no-throw-literal': 'off',
            'react/jsx-key': 'error',
            'react/no-danger': 'off',
            'react/prop-types': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/require-default-props': [
                'warn',
                {
                    ignoreFunctionalComponents: true,
                },
            ],
            'jsx-a11y/label-has-associated-control': [
                'error',
                {
                    required: {
                        some: ['nesting', 'id'],
                    },
                },
            ],
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    endOfLine: 'auto',
                },
            ],
            'no-console': 'warn',
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
];
