const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = process.env.NODE_ENV === "development";
module.exports = {
    mode: NODE_ENV ? NODE_ENV : "production",
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        publicPath: "/",
    },
    module: {
        rules: [{
                test: /\.(tsx|ts)$/,
                use: ["ts-loader"],
                exclude: [/node_modules/]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }, {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',

                        }
                    }

                }]
            }

        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json", "css"],
        alias: {
            src: path.resolve(__dirname, './src'),


        },
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src/index.html") })],
    devServer: {
        port: 8080,
        hot: IS_DEV,
        historyApiFallback: true
    }
};