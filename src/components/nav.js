import React, { Component } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styled from 'styled-components';
import { navLinks, navHeight } from '@config';
import {theme, media} from '@styles';
import { debounce } from '@utils';
import Logo from '@components/icons/logo';
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.header`
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 11;
    width: 100%;
    height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
    background-color: ${props => (props.scrollDirection === 'none' ? 'transparent' : colors.darkBlue)};
    box-shadow: ${props => props.scrollDirection === 'up' ? `0 10px 8px -10px ${colors.shadowBlue}` : 'none'};
    transition: ${theme.transition};
    transform: translateY(${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')});
`;
const StyledHold = styled.div`
    display: flex;
    justify-content: space-around;
`;
const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    font-family: ${fonts.SFMono};
`;
const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    transition: ${theme.transition};
    margin: ${props => (props.scrollDirection === 'none' ? '0' : '0 30px')};
    a {
        display: block;
        transition: ${theme.transition};
        svg {
            transition: ${theme.transition};
            width: ${props => (props.scrollDirection === 'none' ? '75px' : '65px')};
        }
        #rec {
            fill: none;
        }
        .main {
            fill: #FFFFFF;
            stroke: #FFFFFF;
            stroke-width: 4;
            stroke-miterlimit: 10;
        }
        &:hover,
        &:focus {
            #rec {
                fill: ${colors.shadowWhite};
                stroke: ${colors.green}
            }
        }
    }
`;
const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    transition: ${theme.transition};
    margin: ${props => (props.scrollDirection === 'none' ? '10px 0' : '8px 0')};
`;
const StyledListItem = styled.li`
    display: flex;
    margin: 0px 30px;
    font-size: ${fontSizes.md};
    transition: ${theme.transition};
    ${media.tablet`display: none;`};
`;
const StyledListLink = styled(Link)`
    padding: 10px 10px;
    color: ${colors.green};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:after {
        content: '';
        position: relative;
        bottom: 0;
        height: 1.5px;
        background: ${colors.green};
        z-index: 2;
        width: 100%;
        transform: scaleX(0);
        transition: ${theme.transition};
    }
    &:hover,
    &:focus,
    &:active {
        &:after {
            transform: scaleX(1.1);
        }
    }
`;
const ButtonHold = styled.div`
    transition-delay: 5000ms;    
    transition: ${theme.transition};    
`;
// const StyledResume = styled.a`
//     color: ${colors.green};
//     background-color: ${colors.greenButton};
//     border: none;
//     position: "absolute";
//     top: ${props => props.scrollDirection === 'none' ? `17px` : `16px`};
//     right: -300px;
//     border-radius: 5px;
//     padding: 0.75rem 1rem;
//     font-size: ${fontSizes.sm};
//     font-family: ${fonts.SFMono};
//     line-height: 1;
//     text-decoration: none;
//     cursor: pointer;
//     ${media.desktop`display: none;`};
//     ${media.bigDesktop`right: -70px;`};
//     transition: ${theme.transition};
//     &:hover,
//     &:focus,
//     &:active {
//         background-color: ${colors.green};
//     }
// `;

const DELTA = 5;

class Nav extends Component {
    state = {
        isMounted: !this.props.isHome,
        scrollDirection: 'none',
        lastScrollTop: 0,
    };

    componentDidMount() {
      setTimeout(
          () => 
            this.setState({isMounted: true}, () => {
                window.addEventListener('scroll', () => debounce(this.handleScroll()));
            })
      )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll());
    }

    handleScroll = () => {
        const { isMounted, scrollDirection, lastScrollTop } = this.state;
        const fromTop = window.scrollY;

        if(!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
            return;
        }

        if(fromTop < DELTA) {
            this.setState({ scrollDirection: 'none' });
        } else if (fromTop > lastScrollTop && fromTop > navHeight){
            if(scrollDirection !== 'down') {
                this.setState({ scrollDirection: 'down' });
            }
        } else if (fromTop + window.innerHeight < document.documentElement.scrollHeight) {
            if(scrollDirection !== 'up') {
                this.setState({ scrollDirection: 'up' })
            }
        }

        this.setState({ lastScrollTop: fromTop });
    }
    

  render() {
    const { isMounted, scrollDirection, lastScrollTop } = this.state;
    const { isHome } = this.props;
    const timeout = isHome ? 2000 : 0;
    const fadeDown = isHome ? 'fadedown' : '';

    return (
      <StyledContainer scrollDirection={scrollDirection} fromTop={lastScrollTop}>
          <StyledHold>
            <StyledNav>
                <StyledList>
                    <TransitionGroup component={null}>
                        {isMounted && 
                         navLinks && 
                         navLinks.map(({url, name}, i) => (
                            <CSSTransition key={i} classNames={fadeDown} timeout={timeout}>
                                <>
                                    <StyledListItem 
                                        scrollDirection={scrollDirection}
                                        style={{ transitionDelay:  `${isHome ? i*100 : 0}ms` }}>
                                        <StyledListLink to={url}>{name}</StyledListLink>
                                    </StyledListItem>
                                    {i===1 && (
                                        <div style={{ transitionDelay:  `${isHome ? i*100 : 0}ms` }}>
                                            <StyledLogo 
                                                tabIndex="-1"
                                                scrollDirection={scrollDirection}>
                                                {isHome ? (
                                                    <a href="/" aria-label="home">
                                                        <Logo/>
                                                    </a>
                                                ) : (
                                                    <Link to="/" aria-label="home">
                                                        <Logo/>
                                                    </Link>
                                                )}
                                            </StyledLogo>
                                        </div>
                                    )}
                                </>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </StyledList>
            </StyledNav>
            <TransitionGroup component={null}>
                {isMounted && (
                    <CSSTransition classNames={fadeDown} timeout={timeout}>
                        <ButtonHold scrollDirection={scrollDirection} isHome={isHome} style={{ transitionDelay:  `${navLinks.length * 100}ms` }}>
                            {/* <StyledResume scrollDirection={scrollDirection} href="/">Resume</StyledResume> */}
                        </ButtonHold>
                    </CSSTransition>
                )}
            </TransitionGroup>
          </StyledHold>
      </StyledContainer>
    )
  }
}

export default Nav;