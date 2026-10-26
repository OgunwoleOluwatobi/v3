/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@config': path.resolve(__dirname, 'src/config'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@fonts': path.resolve(__dirname, 'src/fonts'),
                '@images': path.resolve(__dirname, 'src/images'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            },
        },
    });

    if(stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null(),
                    },
                    {
                        test: /animejs/,
                        use: loaders.null(),
                    }
                ],
            },
        });
    }
  }
