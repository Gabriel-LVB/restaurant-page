const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(webp|svg|png)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff)$/i,
                type: "asset/resource",
            },
        ],
    },
};
