const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async config => {
    // Configure webpack to support absolute imports from the src folder
    // This matches the project's existing import style (e.g., import X from 'shared/...')
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    return config;
  },
};
