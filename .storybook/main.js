module.exports = {
    stories: ['../packages/**/*.stories.@(js|mdx)'],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
            },
        },
    ],
};
