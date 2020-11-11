/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2020 ☜Samlv9☞ and other contributors
/// @MIT-LICENSE | 6.0 | https://developers.guless.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fs = require("fs");
const path = require("path");
const dist = path.resolve(__dirname, "../dist/www/");
const context = path.resolve(__dirname, "../www/");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const OnceImporter = require("node-sass-once-importer");

function createDefaultWebpackConfiguration(env = {}, argv = {}) {
    return {
        context,
        devtool: argv.mode !== "development" ? false : "inline-source-map",
        entry: {
            "app": ["./app.ts"],
        },
        output: {
            path: dist,
            filename: "[name].js",
        },
        resolve: {
            alias: {
                "@": context,
            },
            extensions: [
                ".tsx",
                ".ts",
                ".wasm",
                ".mjs",
                ".js",
                ".json",
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?(?:\?.*)?$/i,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: path.resolve(context, "tsconfig.json"),
                            },
                        },
                    ],
                },
                {
                    test: /\.vue(?:\?.*)?$/i,
                    use: [
                        { loader: "vue-loader" },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)(?:\?.*)?$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                esModule: false,
                                name: "[path][name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.s?css(?:\?.*)?/i,
                    use: [
                        {
                            loader: "style-loader",
                        },
                        {
                            loader: "css-loader",
                            options: {
                                url: false,
                            },
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                config: { path: path.resolve(context) },
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sassOptions: { importer: OnceImporter() },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new HTMLWebpackPlugin({
                chunks: ["app"],
                filename: "index.html",
                title: "🍊桔里🍊 - 贡品级蜜广小桔子",
                template: path.resolve(context, "template.html"),
            }),
        ],
    };
}

module.exports = createDefaultWebpackConfiguration;
