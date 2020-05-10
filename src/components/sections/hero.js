import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import { email } from '@config';
import { theme, media, Section } from '@styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const { colors, fontSizes, fonts, navDelay, loaderDelay } = theme;

const Contain = styled(Section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${media.tablet`padding-top: 150px;`};
    &:hover {
      .stagger-visualizer .dots-wrapper .dots {
        scale: 1.5;
      }
    }
    .animation-wrapper {
        position: absolute;
        top: 17%;
        left: -4%;
        width: 350px;
        height: 200px;
        overflow: hidden;
        ${media.bigDesktop`top: 26%; width: 340px; height: 200px`};
        ${media.tablet`top: 26%; width: 280px; height: 170px`};
        ${media.phablet`width: 250px; height: 200px; top: 20%;`}
    }

    .stagger-visualizer {
        position: absolute;
        left: 0;
        width: 100%;
    }

    .dots-wrapper {
        transform: translateZ(0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2000%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;        
    }

    &.dot {
        position: relative;
        z-index: 1;
        width: 8px;
        height: 8px;
        margin: 5px;
        background-color: transparent;
        background-image: linear-gradient(180deg, ${colors.shadowGreen} 8%, ${colors.shadowWhite} 100%);
        border-radius: 50%;
    }

    &.cursor {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 37px;
        height: 37px;
        margin: 9px;
        background-color: currentColor;
        border-radius: 50%;
    }
`;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
const Title = styled.h1`
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  color: ${colors.white};
  margin: 0 0 10px 5px;
  font-weight: normal;
  line-height: 0.2;
  z-index: 10;
  ${media.desktop`font-size: ${fontSizes.sm}`};
  ${media.tablet`font-size: ${fontSizes.smish}`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 0.9;
  z-index: 10;
  ${media.desktop`font-size: 70px`};
  ${media.tablet`font-size: 60px`};
  ${media.phablet`font-size: 50px`};
  ${media.tiny`font-size: 40px`};
`;
const WhiteName = styled.span`
  color: ${colors.white};
`;
const GreenName = styled.span`
  color: ${colors.green};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.dustyWhite};
  z-index: 10;
  ${media.desktop`font-size: 70px`};
  ${media.tablet`font-size: 60px`};
  ${media.phablet`font-size: 50px`};
  ${media.phone`font-size: 40px`};
`;
const Description = styled.div`
  margin-top: 15px;
  width: 70%;
  z-index: 10;
  ${media.desktop`width: 100%;`};
  p {
    color: ${colors.dustyWhite};
    font-size: 20px;
    margin: 0px 0px 15px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 40px;
  ${media.desktop`
    width: 100%;
  `}
`;
const EmailLink = styled.div`
  position: relative;
  background-color: ${colors.green};
  box-sizing: border-box;
  padding: 1px;
  z-index: 1;
  border-radius: 5px;
  .inner {
    position: relative;
    background-color: ${colors.darkBlue};
    overflow: hidden;
    z-index: 2;
    border: none;
    border-radius: 5px;
    a {
      position: relative;
      z-index: 100;
      color: ${colors.green};
      font-size: ${fontSizes.sm};
      font-family: ${fonts.SFMono};
      padding: 0.75rem 1rem;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: ${theme.transition};
    }
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: ${colors.green};
      transition: ${theme.transition};
    }
    &:before {
      left: -50%;
    }
    &:after {
      right: -50%;
    }
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: ${colors.hamblue};
    visibility: hidden;
  }
  &:before {
    left: -50%;
  }
  &:after {
    right: -50%;
  }
  &:hover {
      &:before,
      &:after {
        visibility: visible;
      }
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
      .inner {
        a {
          color: ${colors.darkBlue};
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }
    }
`;
const StyledResume = styled.a`
  color: ${colors.green};
  background-color: ${colors.greenButton};
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
      background-color: ${colors.green};
      color: ${colors.darkBlue};
  }
`;

const Hero = ({ data }) => {
    const play = (pt) => {
      var grid = [19, 11];
  
      var index = 208;
  
      const animation = anime.timeline({
        easing: 'easeInOutQuad',
        complete: pt === 'play' && play
      });
      animation.add({
        targets: '.dot',
        keyframes: [ 
          {
            translateX: anime.stagger({grid: 10, from: index, axis: 'x'}),
            translateY: anime.stagger('1px', {grid: [10, 5], from: index, axis: 'y'}),
            duration: 200
          }, {
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 200,
          }
        ],
        delay: anime.stagger(50, {grid: grid, from: index})
      },);
  
    };

    const [dots, setdots] = useState([200]);
    const [isMounted, setIsMounted] = useState(false);
    const totalDot = [];

    useEffect(() => {
      play('play');
      totalDot.length = 0;
      setdots([]);
      for (let index = 0; index < 209; index++) {
        totalDot.push(index);
      }
      setdots(totalDot);
      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { frontmatter, html } = data[0].node;
    const { title, name_1, name_2, name_3, name_4, subtitle, buttonText, resumeText } = frontmatter;

    const one = () => (
      <Title style={{ transitionDelay: '100ms' }}>{title}</Title>
    );
    const two = () => (
      <Name style={{ transitionDelay: '200ms' }}><WhiteName>{name_1}</WhiteName><GreenName>{name_2}</GreenName></Name>
    );
    const three = () => (
      <Name style={{ transitionDelay: '300ms' }}><WhiteName>{name_3}</WhiteName><GreenName>{name_4}</GreenName></Name>
    );
    const four = () => (
      <Subtitle style={{ transitionDelay: '400ms' }}>{subtitle}</Subtitle>
    );
    const five = () => (
      <Description 
       style={{ transitionDelay: '500ms' }}
       dangerouslySetInnerHTML={{__html: html}} />
    );
    const six = () => (
      <ButtonHolder style={{ transitionDelay: '600ms' }}>
        <EmailLink>
          <div className="inner"><a href={`mailto:${email}`}>{buttonText}</a></div>
        </EmailLink>
        <StyledResume href="/resume.pdf">{resumeText}</StyledResume>
      </ButtonHolder>
    );

    const items = [one, two, three, four, five, six];

    return (
        <Contain play = {(pt) => play('paused')}>
            <div className="animation-wrapper">
              <div className="stagger-visualizer">
                  <TransitionGroup component={null}>
                    {isMounted && (
                      <CSSTransition classNames="fade" timeout={loaderDelay}>
                        <div className="dots-wrapper" style={{ transitionDelay: '100ms' }}>
                            {dots.map((e, i) => (
                              <div key={i} className="dot"></div>
                            ))}
                        </div>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
              </div>
            </div>
            <StyledContainer>
              <TransitionGroup component={null}>
                {isMounted && items.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                    {item}
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </StyledContainer>
        </Contain>
    )
}

export default Hero;