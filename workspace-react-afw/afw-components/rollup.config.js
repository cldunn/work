import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const fontFileExtensions = ['**/*.woff', '**/*.woff2', '**/*.ttf'];

const globals = {
    react: 'React',
    'react-dom': 'ReactDOM'
};

const name = 'AfwComponents';

export default {
    input: './src/index.ts',
    plugins: [
        peerDepsExternal(),
        scss({
            output: 'dist/afw-components.css'
        }),
        url({
            include: fontFileExtensions,
            limit: Infinity
        }),
        resolve({
            extensions,
            browser: true,
            dedupe: ['react', 'react-dom']
        }),
        commonjs(),
        babel({
            extensions,
            babelHelpers: 'bundled',
            include: ['src/**/*'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react'
            ],
        }),
        copy({
            targets: [
                {src: 'README.md', dest: 'dist'},
                {src: 'package.json', dest: 'dist'},
                {src: 'src/scss/*', dest: 'dist/scss'},
                {src: 'src/common', dest: 'dist/common'},
                {src: 'src/components/**/*.types.ts', dest: 'dist/types'}
            ]
        })
    ],
    output: [{
        file: pkg.library,
        format: 'umd',
        name: 'afw-components',
        globals
    }, {
        file: pkg.main,
        format: 'cjs'
    }, {
        file: pkg.module,
        format: 'es'
    }, {
        file: pkg.browser,
        format: 'iife',
        name,
        globals
    }]
}