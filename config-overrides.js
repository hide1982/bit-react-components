const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin("babel-plugin-jsx-remove-data-test-id")
);
