import webpack from 'webpack'; // to access built-in plugins
import { buildBabelLoder } from './loaders/buildBabelLoder';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoader = buildCssLoader(isDev);

    const babelLoader = buildBabelLoder(options);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const imgLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        type: 'asset/resource',
    };

    return [
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
        imgLoader,
    ];
}
