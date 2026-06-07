const path = require('path');

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: { autodocs: "tag" },
  webpackFinal: async (config) => {
    // Add src directory for absolute imports
    config.resolve.modules = [
      path.resolve(__dirname, '../src'),
      'node_modules'
    ];
    return config;
  },
};

module.exports = config;
