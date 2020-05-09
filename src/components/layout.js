import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle, Bground } from '@styles';
import "./layout.css"
import { Head, Nav, Loader, Social, Menu, Footer } from '@components';

if(typeof window !== 'undefined') {
  //eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if(isLoading) {
      return;
    };
    if(location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if(el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

  return (
    <div id="root">
      <Head metadata={data.site.siteMetadata} />
      <GlobalStyle/>
      {isLoading && isHome ? (
        <Loader finishLoading = {() => {setIsLoading(false)}} />
      ) : (
        <div>
          <Bground/>
          <Nav isHome={isHome} />
          <Social />
          <Menu />
          <div>
              {children}
              <Footer />
            </div>
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
