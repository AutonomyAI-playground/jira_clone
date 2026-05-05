const path = require('path');

module.exports = {
  // Discover all story files throughout the src directory
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: false, // Disable automatic documentation generation
  },
  webpackFinal: async config => {
    // Add module resolution to match main app's absolute import paths
    // Allows imports like 'shared/components' instead of '../../shared/components'
    config.resolve.modules = [path.resolve(__dirname, '../src'), 'node_modules'];
    return config;
  },
};
