import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {theme, media} from '@styles';
import { navLinks } from '@config';
import { Helmet } from 'react-helmet';
const { colors, fontSizes, fonts } = theme;

const StyledIcon = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 90;
    display: none;
    justify-content: flex-end;
    width: 100%;
    flex-direction: row;
    ${media.tablet`display: flex;`};
    ${media.phablet`
      flex-direction: ${props => props.menuOpen ? `column` : `row`};
      width: ${props => props.menuOpen ? '100%' : '10%'};
      height: ${props => props.menuOpen ? 'auto' : '7%'};
    `};
`;
const Hamburger = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    border: 0;
    z-index: 90;
    background-color: transparent;
    box-shadow: 0 1px 8px 5px ${colors.shadowBlue};
    display: none;
    height: 100%;
    background-color: ${props => props.menuOpen ? `${colors.hamblue}` : `${colors.green}`};
    &:hover,
    &:focus,
    &:active {
        background-color: ${props => props.menuOpen ? `${colors.darkBlue}` : `${colors.green}`};
        .one .two {
            background-color: ${props => props.menuOpen ? `${colors.green}` : `${colors.darkBlue}`};
            &:before,
            &:after {
                background-color: ${props => props.menuOpen ? `${colors.green}` : `${colors.darkBlue}`};
            }
        }
    }
    ${media.tablet`display: flex;`};
`;
const StyledHamburgerBox = styled.div`
  display: inline-block;
  height: 18px;
  padding: 17px;
  margin: 10px auto;
  ${media.phablet`margin: 10px auto;`};
`;
const StyledHamburgerInner = styled.div`
  background-color: ${props => props.menuOpen ? `${colors.green}` : `${colors.darkBlue}`};
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${props => props.menuOpen ? `${colors.green}` : `${colors.darkBlue}`};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-9px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props => (props.menuOpen ? theme.hamBeforeActive : theme.hamBefore)};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    top: ${props => (props.menuOpen ? `0` : `-9px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props => (props.menuOpen ? theme.hamAfterActive : theme.hamAfter)};
  }
`;
const Holder = styled.div`
    height: 54px;
    width: 100%;
    right: 25px;
    transition: ${theme.transition};
    z-index: 90;
    background-color:  ${colors.green};
    transform: translateX(${props => props.menuOpen ? '0%' : '200%'});
    ${media.phablet`
      transform: translate(0%, ${props => props.menuOpen ? '0%' : '200%'});
      height: ${props => props.menuOpen ? 'auto' : 'auto'};
      opacity: ${props => props.menuOpen ? '1' : '0'};
      right: 0;
    `};
`;
const StyledList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    transition: ${theme.transition};
    ${media.phablet`
      flex-direction: ${props => props.menuOpen ? 'column' : 'column'};
      justify-content: center;
    `}
`;
const StyledListItem = styled.li`
    display: flex;
    margin: 15px 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.SFMono};
    transition: ${theme.transition};
    ${media.phablet`
      justify-content: center;
      font-size: ${fontSizes.lg};
    `}
`;
const StyledListLink = styled(Link)`
    padding: 0px 0px;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        position: relative;
        bottom: 0;
        height: 1.5px;
        background: ${colors.darkBlue};
        z-index: 2;
        width: 100%;
        transform: scaleX(0);
        transition: ${theme.transition};
    }
    &:hover,
    &:active,
    &:focus {
      color: ${colors.darkBlue};
      &:after {
          transform: scaleX(1);
      }
    }
`;

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const clickHandler = e => {
      const target = e.target;
      const isLink = target.hasAttribute('href');
      const isMenu = target.classList && target.classList[0].includes('StyledIcon');

      if(isLink || isMenu) {
        toggleMenu();
      }
    }

    return (
      <StyledIcon menuOpen={menuOpen} onClick={clickHandler} aria-hidden={!menuOpen}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
          <Holder menuOpen={menuOpen}>
              <StyledList menuOpen={menuOpen}>
                  {navLinks && navLinks.map(({url, name}, i) => (
                      <StyledListItem key={i}>
                          <StyledListLink to={url}>{name}</StyledListLink>
                      </StyledListItem>
                  ))}
              </StyledList>
          </Holder>
          <TransitionGroup component={null}>
            <CSSTransition classNames={'fadedown'} timeout={2000}>
              <Hamburger menuOpen={menuOpen} onClick={toggleMenu}>
                <StyledHamburgerBox className="one">
                  <StyledHamburgerInner className="two" menuOpen={menuOpen} />
                </StyledHamburgerBox>
              </Hamburger>
            </CSSTransition>
          </TransitionGroup>
        </StyledIcon>
    )
}

export default HamburgerMenu;