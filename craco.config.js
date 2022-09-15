const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { compilerOptions } = require('./tsconfig.json');
const { pathsToAliasNameMapper, pathsToModuleNameMapper } = require('./scripts/helpers.js');

module.exports = {
  devServer: {
    port: 5001,
  },
  webpack: {
    plugins: {
      add: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          generateStatsFile: true,
          reportFilename: '../bundle-report.html',
          statsFilename: '../bundle-stats.json',
        }),
      ],
    },
    alias: {
      ...pathsToAliasNameMapper(compilerOptions.paths),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths, {
          prefix: '<rootDir>/src/',
        }),
      },
    },
  },
  plugins: [
    {
      plugin: {
        overrideJestConfig: ({ jestConfig }) => {
          jestConfig.reporters = jestConfig.reporters ?? ['default'];
          if (process.env.CI) {
            jestConfig.reporters.push([
              'jest-junit',
              {
                outputDirectory: 'reports/junit',
                ancestorSeparator: ' › ',
                uniqueOutputName: 'false',
                suiteNameTemplate: '{filepath}',
                classNameTemplate: '{classname}',
                titleTemplate: '{title}',
              },
            ]);
          }

          return jestConfig;
        },
      },
      options: {},
    },
  ],
};
