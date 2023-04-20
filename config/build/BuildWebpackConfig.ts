import type webpack from 'webpack';
import { BuildDevServer } from './BuildDevServer';
import { BuildLoaders } from './BuildLoaders';
import { BuildPlugins } from './BuildPlugins';
import { BuildResolvers } from './BuildResolvers';
import { type BuildOptions } from './types/config';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
        entry: paths.entry,
        module: BuildLoaders(options),
        resolve: BuildResolvers(options),
        output: {
            path: paths.build,
            filename: '[name].[contenthash:8].js',
            clean: true,
            publicPath: '/',
        },
        plugins: BuildPlugins(options),
    };
}
