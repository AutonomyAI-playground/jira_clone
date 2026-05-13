const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  webpackFinal: async config => {
    // Support absolute imports from 'src' folder
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    return config;
  },
};
