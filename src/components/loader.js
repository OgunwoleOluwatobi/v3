import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import anime from 'animejs'
import Logo from './icons/logo';
import { theme, media } from '@styles';
const { colors } = theme;

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${colors.darkBlue};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`;

const StyledLogo = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    transition: ${theme.transition},
    svg {
        width: 300px;
        height: 300px;
        display: block;
        margin: 0 auto;
    }
    .main {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 4;
        stroke-miterlimit: 10;
    }
    #rec {
        fill: none;
    }
    #dot, #shadow, #img {
        opacity: 0;
    }
    ${media.tablet`
        width: 250px;
        height: 250px;
        svg {
            width: 250px;
            height: 250px;
        }
    `};
    ${media.phone`
        width: 150px;
        height: 150px;
        svg {
            width: 150px;
            height: 150px;
        }
    `};
`;

const Loader = ({ finishLoading }) => {
    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader.add({
            targets: ['#logo #rec', '#logo .main'],
            duration: 1500,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
            strokDasharray: anime.setDashoffset
        });
        loader.add({
            targets: '#logo .main',
            duration: 300,
            easing: 'linear',
            fill: '#ffffff',
        })
        loader.add({
            targets: ['#logo #shadow', '#logo #dot'],
            duration: 300,
            easing: 'linear',
            opacity: 1
        },);
        loader.add({
            targets: '#logo #img',
            duration: 1500,
            easing: 'spring(.5, 100, 10, 0)',
            keyframes: [
                {translateY: -43, translateX: 170, scale: 0.2},
                {translateY: 220, translateX: 170, opacity: 1, scale: 0.2},
                {translateY: 160, translateX: 170, opacity: 1, scale: 0.2},
                {translateY: 180, translateX: 170, opacity: 1, scale: 0.2},
            ] 
        },);
        loader.add({
            targets: '#logo',
            delay: 500,
            duration: 300,
            easing: 'easeInOutQuart',
            opacity: 0,
            scale: 0.1
        });
        loader.add({
            targets: '.loader',
            duration: 200,
            easing: 'easeInOutQuart',
            opacity: 0,
            zIndex: -1
        })
    }

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className="loader">
            <StyledLogo isMounted={isMounted}>
                <Logo/>
            </StyledLogo>
        </Container>
    );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired
}

export default Loader;