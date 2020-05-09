import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout2 } from '@components';
import { FormattedIcon } from '@components/icons'
import { theme, media } from '@styles';
const { colors, fonts, fontSizes, navDelay } = theme;

const Container = styled.main`
  padding: 0 150px;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
`;
const Title = styled.h1`
  color: ${colors.green};
  font-size: 12vw;
  line-height: 1;
  font-family: ${fonts.SFMono};
  ${media.desktop`font-size: 50px`};
  ${media.phablet`font-size: 30px`};
`;
const Subtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  color: ${colors.dustyWhite};
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const Text = styled.p`
  font-size: 1.5vw;
  font-weight: 100;
  color: ${colors.dustyWhite};
  ${media.bigDesktop`font-size: 40px;`};
  ${media.phablet`font-size: 20px;`};
`;
const HomeLink = styled(Link)`
  color: ${colors.green};
  background-color: ${colors.greenButton};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  div {
    padding: 0 6px;
    svg {
      fill: ${colors.green};
      transition: ${theme.transition};
    }
  };
  &:hover,
  &:focus,
  &:active {
      background-color: ${colors.green};
      color: ${colors.darkBlue};
      div {
        svg {
          fill: ${colors.darkBlue};
        }
      };
  }
`;

const NotFoundPage = ({ location }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return(
    <Layout2 location={location}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fade" timeout={500}>
            <Container>
              <Title>404</Title>
              <Subtitle>Page Not Found</Subtitle>
              <Text>Link is broken or has been removed</Text>
              <HomeLink to="/">Go Home<div><FormattedIcon name="Home" /></div> </HomeLink>
            </Container>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout2>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
