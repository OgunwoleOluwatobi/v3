import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyle, Bground } from '@styles';
import "./layout.css"
import { Head, Nav, Loader, Social, Menu, Footer } from '@components';
import { RevealContext } from './reveal';

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
  // The page renders under the loader; entrance animations wait for the intro to hand off
  const [revealed, setRevealed] = useState(!isHome);
  const [showNavLogo, setShowNavLogo] = useState(!isHome);

  useEffect(() => {
    if(!revealed) {
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
  }, [revealed])

  return (
    <div id="root">
      <Head metadata={data.site.siteMetadata} />
      <GlobalStyle/>
      {isLoading && isHome && (
        <Loader
          onReveal = {() => {setRevealed(true)}}
          onLand = {() => {setShowNavLogo(true)}}
          finishLoading = {() => {setIsLoading(false)}} />
      )}
      <RevealContext.Provider value={revealed}>
        <div>
          <Bground/>
          <Nav isHome={isHome} hideLogo={!showNavLogo} />
          <Social />
          <Menu />
          <div>
              {children}
              <Footer />
            </div>
        </div>
      </RevealContext.Provider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
