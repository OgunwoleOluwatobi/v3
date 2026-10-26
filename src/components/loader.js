import React, { useEffect, useRef, useState } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import anime from 'animejs'
import Logo from './icons/logo';
import { theme, media } from '@styles';
import { hex2rgba } from '@utils';
const { colors } = theme;

const INTRO_KEY = 'archie-intro-seen';
const SKIP_EVENTS = ['keydown', 'wheel', 'touchstart', 'pointerdown'];

// Settles on #img's own transform in logo.js so it matches the nav logo. anime.js applies keys in order, so translate before scale.
const facePosition = translateY => ({ translateX: 165, translateY, scaleX: 0.2004, scaleY: 0.1934 });
export const faceDrop = [
    {...facePosition(-50.5), opacity: 0, duration: 0},
    {...facePosition(212.5), opacity: 1, duration: 350},
    {...facePosition(152.5), duration: 200},
    {...facePosition(172.5), duration: 150},
];

// Starting values apply on creation, so the logo never shows fully drawn first
export const drawLogo = (root, { draw, step, complete }) => {
    const parts = selector => root.querySelectorAll(selector);
    return anime.timeline({ complete })
        .add({
            targets: parts('#rec, .main'),
            duration: draw,
            easing: 'easeInOutQuart',
            strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
            targets: parts('.main'),
            duration: step,
            easing: 'linear',
            fill: ['rgba(255, 255, 255, 0)', '#ffffff'],
        }, '-=100')
        .add({
            targets: parts('#shadow, #dot'),
            duration: step,
            easing: 'linear',
            opacity: [0, 1],
        }, '-=100')
        .add({
            targets: parts('#img'),
            easing: 'easeInOutSine',
            keyframes: faceDrop,
        }, '-=150');
};

export const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    margin: auto;
    transform-origin: 0 0;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    svg {
        width: 100%;
        height: auto;
        display: block;
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
    ${media.tablet`width: 250px;`};
    ${media.phone`width: 150px;`};
`;

const Loader = ({ onReveal, onLand, finishLoading }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const logo = logoRef.current;
        let timeline;
        let done = false;

        const removeSkipListeners = () =>
            SKIP_EVENTS.forEach(e => window.removeEventListener(e, skip));

        // Show the nav logo under the landed one before removing the loader, so no frame is left without a logo
        const finish = () => {
            if (done) return;
            done = true;
            removeSkipListeners();
            try { sessionStorage.setItem(INTRO_KEY, '1'); } catch (e) {}
            onLand();
            requestAnimationFrame(() => requestAnimationFrame(finishLoading));
        };

        function skip() {
            if (done) return;
            if (timeline) timeline.pause();
            anime.remove([logo, container]);
            onReveal();
            finish();
        }

        const waitForNavLogo = (cb, frames = 30) => {
            const el = document.querySelector('[data-nav-logo] svg');
            if (el && el.getBoundingClientRect().width) return cb(el);
            if (frames === 0) return cb(null);
            requestAnimationFrame(() => waitForNavLogo(cb, frames - 1));
        };

        const handoff = () => {
            onReveal();
            waitForNavLogo(target => {
                if (done) return;
                if (!target) return finish();
                const from = logo.getBoundingClientRect();
                const to = target.getBoundingClientRect();
                container.style.pointerEvents = 'none';
                anime({
                    targets: logo,
                    translateX: to.left - from.left,
                    translateY: to.top - from.top,
                    scale: to.width / from.width,
                    duration: 650,
                    easing: 'easeInOutCubic',
                    complete: finish,
                });
                anime({
                    targets: container,
                    backgroundColor: hex2rgba(colors.darkBlue, 0),
                    duration: 450,
                    delay: 100,
                    easing: 'linear',
                });
            });
        };

        const replayInNav = () => {
            container.style.display = 'none';
            onReveal();
            waitForNavLogo(target => {
                if (done) return;
                if (target) drawLogo(target, { draw: 500, step: 200 });
                finish();
            });
        };

        if (prefersReducedMotion()) {
            skip();
            return removeSkipListeners;
        }
        let seen = false;
        try { seen = !!sessionStorage.getItem(INTRO_KEY); } catch (e) {}
        if (seen) {
            replayInNav();
            return removeSkipListeners;
        }

        const timeout = setTimeout(() => setIsMounted(true), 10);
        SKIP_EVENTS.forEach(e => window.addEventListener(e, skip, { passive: true }));

        timeline = drawLogo(logo, { draw: 800, step: 250, complete: handoff });

        return () => {
            clearTimeout(timeout);
            removeSkipListeners();
            timeline.pause();
            anime.remove([logo, container]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className="loader" ref={containerRef}>
            <StyledLogo isMounted={isMounted} ref={logoRef}>
                <Logo/>
            </StyledLogo>
        </Container>
    );
};

Loader.propTypes = {
  onReveal: PropTypes.func.isRequired,
  onLand: PropTypes.func.isRequired,
  finishLoading: PropTypes.func.isRequired
}

export default Loader;
