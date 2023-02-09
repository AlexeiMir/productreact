import path from 'path';
import webpack from 'webpack'; // to access built-in plugins
import { BuildPaths, BuildEnv } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const assertsPaths = {
        svg: path.join('icons', '[name].[contenthash][ext]'),
    };

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        assetModule: path.join('images', '[name].[contenthash][ext]'),
        asserts: assertsPaths,
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
