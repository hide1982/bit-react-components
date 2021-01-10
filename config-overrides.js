const { override, getBabelLoader } = require("customize-cra");

const addBabelPlugin = (plugin, mode) => (config) => {
  if (mode && config.mode === mode) {
    getBabelLoader(config).options.plugins.push(plugin);
  }
  return config;
};

module.exports = override(
  addBabelPlugin("babel-plugin-jsx-remove-data-test-id", "production")
);
