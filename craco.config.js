const ExtensionReloader = require('webpack-extension-reloader');

module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' &&
                    require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                    content: './src/content/content.ts',
                    background: './src/background/background.ts',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
                plugins: [
                    // https://github.com/rubenspgcavalcante/webpack-extension-reloader
                    new ExtensionReloader({
                        port: 9090, // Which port use to create the server
                        reloadPage: true, // Force the reload of the page also
                        entries: { // The entries used for the content/background scripts or extension pages
                            contentScript: 'content-script',
                            background: 'background',
                            extensionPage: 'popup',
                        }
                    }),
                ]
            }
        },
    }
}