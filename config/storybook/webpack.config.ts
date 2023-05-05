import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        assetModule: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
        buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
    };
    if (config.resolve) {
        config.resolve.modules = [paths.src, 'node_modules'];
    }

    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules?.map(
            (rule: RuleSetRule | '...') => {
                if (
                    rule !== '...' &&
                    rule.test instanceof RegExp &&
                    rule.test.toString().includes('svg')
                ) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                return rule;
            },
        );

        config!.module!.rules = config.module!.rules!.map(
            // eslint-disable-next-line no-param-reassign
            // @ts-ignore
            (rule: RuleSetRule) => {
                if (
                    /\.(png|jpe?g|gif|woff2|woff)$/i.test(rule.test as string)
                ) {
                    return {
                        ...rule,
                        exclude: /\.(png|jpe?g|gif|woff2|woff)$/i,
                    };
                }

                return rule;
            },
        );
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push({
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    });

    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    return config;
};
