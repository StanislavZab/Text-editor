import {
    WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin,
} from 'webpack';
import HtmlWebpackPlugins from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { type BuildOptions } from './types/config';

export function BuildPlugins(options: BuildOptions): WebpackPluginInstance[] {
    const {
        paths, isDev, apiUrl, project,
    } = options;
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugins({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.[contenthash:10].css',
            chunkFilename: 'css/style.[contenthash:10].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: paths.locales, to: paths.buildLocales },
        //     ],
        // }),
        new HotModuleReplacementPlugin(),
        new CircularDependencyPlugin({
            exclude: /node-modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];
}
