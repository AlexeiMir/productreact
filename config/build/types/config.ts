export type BuildMode = 'production' | 'development';

export type AssertsPaths = {
  svg: string
}

export type BuildPaths = {
  entry: string,
  build: string,
  html: string,
  src: string,
  assetModule: string,
  asserts: AssertsPaths
}

export interface BuildEnv {
  mode: BuildMode,
  port: number
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
}
