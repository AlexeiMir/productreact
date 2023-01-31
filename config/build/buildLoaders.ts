import webpack from 'webpack'; //to access built-in plugins

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}