module.exports = {
  stories: ['../src/*.stories.(js|mdx)','../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    // {
    //   name: '@storybook/preset-typescript',
    //   options: {
    //     tsDocgenLoaderOptions: {
    //       tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
    //     },
    //     include: [path.resolve(__dirname)],
    //   },
    // },
  ],
};
