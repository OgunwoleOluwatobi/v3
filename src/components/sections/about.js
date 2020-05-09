import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { github, srConfig } from '@config';
import { theme, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const Container = styled(Section)`
    position: relative;
`;
const FluidContain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.desktop`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `};
`;
const StyledContent = styled.div`
    width: 100%;
    p{
        color: ${colors.dustyWhite};
        font-size: 22px;
        ${media.desktop`font-size: 20px;`};
    }
    a{
        color: ${colors.green};
        &:hover {
            color: ${colors.white};
            text-decoration: underline;
        }
    }
`;
const Skills = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    margin: 20px 0 0 0;
    list-style: none;
    padding: 0;
`;
const Skill = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    color: ${colors.dustyWhite};
    font-size: ${fontSizes.sm};
    &:before{
        content: '-';
        position: absolute;
        left: 0;
        color: ${colors.green};
        font-size: ${fontSizes.sm};
        line-height: 12px;
    }
`;
const ImgContain = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    ${media.desktop`margin: 30px auto 0;`};
    ${media.phablet`width: 70%;`};

    &:hover {
      .stagger-visualizer .dots-wrapper .dot {
        scale: 1.1;
        background-color: ${colors.logoHover};
      }
    }
    .animation-wrapper {
        position: absolute;
        top: 12%;
        left: 5%;
        width: 300px;
        height: 250px;
        overflow: hidden;
        z-index: -1;
        ${media.bigDesktop` width: 300px; height: 250px; left: 5%;`};
        ${media.phablet`width: 240px; height: 200px; top: 10%; left: -4%;`}
    }
    .stagger-visualizer {
        position: absolute;
        width: 100%;
        z-index: -1;
    }

    .stagger-visualizer .dots-wrapper {
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

    .stagger-visualizer .dot {
        position: relative;
        z-index: 1;
        width: 8px;
        height: 8px;
        margin: 4.5px;
        background-color: transparent;
        transition: ${theme.transition};
        background-image: linear-gradient(180deg, ${colors.shadowGreen} 8%, ${colors.shadowWhite} 100%);
        border-radius: 50%;
        &:hover {
          ${setTimeout(() => props =>props.play('paused'), 2000)};
        }
    }
`;
const Avatar = styled(Img)`
    position: relative;
    max-height: 260px;
    mix-blend-mode: multiply;
    filter: grayscale(1005) contrast(1);
    transition: ${theme.transition};
`;
const AvatarLink = styled.a`
    width: 100%;
    position: relative;
    background-color: ${colors.green};
    margin-left: -20px;
    box-shadow: -10px 15px 8px -5px ${colors.shadowBlue};
    &:hover,
    &:focus {
        background: transparent;
        transform: translateY(-3px);
        box-shadow: -10px 20px 8px -5px ${colors.shadowBlue};
        ${Avatar} {
            filter: none;
            mix-blend-mode: normal;
        }
    }
    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: ${theme.transition};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colors.green};
        mix-blend-mode: screen;
    }
`;
const Contain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ${media.desktop`
        flex-direction: column;
    `};
`;

const About = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { avatar, skills } = frontmatter;

    const [dots, setdots] = useState([200]);
    const totalDot = [];
    const sectionRef = useRef(null);

    useEffect(() => {
      totalDot.length = 0;
      setdots([]);
      for (let index = 0; index < 255; index++) {
        totalDot.push(index);
      }
      setdots(totalDot);
      sr.reveal(sectionRef.current, srConfig());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container id="about" ref={sectionRef} >
            <Heading width="80px" min="60px"><span className="one">About &nbsp;</span><span className="two">Me</span></Heading>
            <FluidContain>
                <StyledContent>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <Contain>
                        <Skills>
                            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
                        </Skills>
                        <ImgContain>
                            <AvatarLink href={github}>
                                <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
                            </AvatarLink>
                            <div className="animation-wrapper">
                                <div className="stagger-visualizer">
                                <div className="dots-wrapper" style={{ transitionDelay: '100ms' }}>
                                    {dots.map((e, i) => (
                                        <div key={i} className="dot"></div>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </ImgContain>
                    </Contain>
                </StyledContent>
                
            </FluidContain>
        </Container>
    )
}

export default About;