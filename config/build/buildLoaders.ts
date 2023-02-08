import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'; //to access built-in plugins

export function buildLoaders({isDev, paths}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader": MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: isDev 
            ? "[path][name]__[local]--[hash:base64:5]"
          : "[hash:base64:8]",
          auto: ((resourcePath: string) => Boolean(resourcePath.includes('.module.'))),
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    // type: 'asset/resource',
    use: ['@svgr/webpack'],
    // generator: {
    //   filename: paths.asserts.svg,
    //   }
    }
    
    const imgLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    type: 'asset/resource',
    }

  return [
    typescriptLoader,
    cssLoader,
    svgLoader,
    imgLoader
  ]
}