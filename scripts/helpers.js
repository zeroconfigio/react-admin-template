const { join, resolve } = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');

// Utility functions
module.exports.toPath = function (filePath) {
  return join(process.cwd(), filePath);
};

module.exports.pathsToAliasNameMapper = function (aliases) {
  const _toPath = (file) => resolve(process.cwd(), file);
  const _sanitize = (alias) => alias.replace(/\.\//, 'src/').replace(/\/\*/, '');
  const _reducerFn = (acc, [alias, path]) => ({
    ...acc,
    [_sanitize(alias)]: _toPath(_sanitize(path[0])),
  });

  return Object.entries(aliases).reduce(_reducerFn, {});
};

module.exports.pathsToModuleNameMapper = pathsToModuleNameMapper;
