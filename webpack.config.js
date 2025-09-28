const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);
    // Removed invalid output block
    return {
            mode,
            entry: "./src/index.js",
            output: {
                publicPath: "/Portfolio",
                path: path.resolve(__dirname, "docs"),
                filename: "bundle.js"
            },
            module: {
                rules: [
                 {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.scss$/,
                    use: [
                    'style-loader', // Injects CSS into the DOM
                    'css-loader',   // Interprets @import and url() like import/require()
                    'sass-loader'   // Compiles Sass to CSS
                    ]
                }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
            ]
        }
};