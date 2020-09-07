// eslint-disable-next-line
const path = require("path");
// eslint-disable-next-line
const webpack = require("webpack");
// eslint-disable-next-line
const fs = require("fs");

const QUACS_DATA_DIR = path.resolve(__dirname, "src/store/data");

module.exports = {
  publicPath: "/",

  pwa: {
    themeColor: "#DCC308",
    msTileColor: "#DCC308",
    manifestOptions: {
      background_color: "#DCC308",
    },
    name: "QuACS",
    workboxOptions: {
      skipWaiting: true,
    },
  },
  configureWebpack: (config) => {
    config.module.rules = [
      {
        test: /\.worker\.ts$/i,
        use: [
          {
            loader: "workerize-loader",
          },
        ],
      },
      ...config.module.rules,
    ];
    config.output = {
      globalObject: "self",
      ...config.output,
    };

    // Compile-time computation goes here.
    // Currently used for generating the list of available semesters
    config.plugins.push(
      new webpack.DefinePlugin({
        SEMESTERS: webpack.DefinePlugin.runtimeValue(() => {
          JSON.stringify(
            fs
              .readdirSync(QUACS_DATA_DIR, {
                withFileTypes: true,
              })
              .filter((f) => f.isDirectory())
              .map((dir) => dir.name)
              .sort((a, b) => b - a)
          );
        }, [QUACS_DATA_DIR]),
      })
    );
  },
};
