import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle } from '@styles';
import "./layout.css"
import { Head, Nav, Social, Menu, Footer } from '@components';

const Layout2 = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)

  const isHome = location.pathname === '/';

  return (
    <div id="root">
        <Head metadata={data.site.siteMetadata} />
        <GlobalStyle/>
        <Nav isHome={isHome} />
        <Social />
        <Menu />
        <div>
            {children}
            <Footer />
        </div>
    </div>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout2;