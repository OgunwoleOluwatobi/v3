/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';

// Without JavaScript the intro never runs, so show the page instead of the loader
export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <noscript key="no-js-intro">
            <style>{'.loader { display: none !important; } [data-nav-logo] { opacity: 1 !important; }'}</style>
        </noscript>,
    ]);
};
