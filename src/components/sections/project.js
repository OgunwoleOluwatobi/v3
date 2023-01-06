import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '../icons';
import { keyFramesRight, keyFramesLeft, keyFramesTop } from '@styles/keyframes';
import { theme, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledContent = styled.div `
    position: relative;
    grid-column: 1 / 8;
    grid-row: 1 / -1;
    background-color: ${colors.hamblue};
    border-radius: 15px;
    border: 0.5px solid ${colors.logoHover};
    padding: 10px;
    box-shadow: -10px 10px 18px 5px ${colors.shadowBlue};
    &:hover {
        border: 0.5px solid ${colors.green};
    }
    ${media.desktop`
        grid-row: 5 / -1;
        grid-column: 1 / -1;
        z-index: 5;
    `};
    ${media.thone`
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        background-color: transparent;
        z-index: 5;
        width: 100%;
        height: 100%;
    `};
`;
const Cover = styled.div`
    position: relative;
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    width: 100px;
    height: 93%;
    box-shadow: 25px 0px 12px -12px ${colors.shadowBlue};
    background-color: ${colors.hamblue};
    z-index: 3;
    ${media.desktop`
        grid-row: 7 / 6;
        grid-column: 1 / -1;
        width: 90%;
        height: 50px;
        margin: 0 auto;
        display: none;
    `};
    ${media.thone`display: none`};
`;
const Label = styled.h5`
    font-size: 32px;
    margin: 15px;
    color: ${colors.white};
    z-index: 500;
    ${media.desktop`margin: 15px;`};
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: 25px;
    color: ${colors.dustyWhite};
    a {
        padding: 10px;
        svg{
            width: 22px;
            height: 22px;
            fill: ${colors.green};
            &:hover {
                fill: ${colors.white};
            }
        }
    }
    ${media.desktop`
        justify-content: center;
        margin-left: 0px;
        width: 100%;
    `};
`;
const Desc = styled.div`
    position: relative;
    z-index: 4;
    padding: 12px 65px 0px 30px;
    color: ${colors.dustyWhite};
    font-size: ${fontSizes.xxl};
    ${media.bigDesktop`
        font-size: ${fontSizes.xl};
        padding: 12px 45px 0px 30px;
    `};
    ${media.desktop`
        padding: 0 20px;
    `};
`;
const Built = styled.ul`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 0 25px 25px;
    z-index: 4;
    list-style: none;
    li {
        font-family: ${fonts.SFMono};
        font-size: ${fontSizes.smish};
        color: ${colors.dustyWhite};
        white-space: nowrap;
        margin-right: 20px;
    }
    ${media.desktop`
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 100%;
    `};
`;
const ImgContainer = styled(Img)`
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 15px;
    height: 260px;
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    ${media.desktop`
        width: 100%;
        height: 300px;
    `};
    ${media.thone`
        width: 100%;
        height: 100%;
    `};
`;
const StyledImg = styled.a`
    position: relative;
    grid-column: 7 / -1;
    grid-row: 1 / -1;
    top: 0;
    left: 0;
    background-color: ${colors.green};
    border-radius: 15px;
    height: 260px;
    transition: all .5s ease-in-out;
    box-shadow: 20px 10px 8px -10px ${colors.shadowBlue};
    z-index: 1;
    transform-origin: left;
    transform: scaleX(1);
    ${media.desktop`
        grid-row: 1 / 7;
        grid-column: 1 / -1;
        height: 300px;
        width: 80%;
        margin: 0 auto;
    `};
    ${media.thone`
        grid-row: 1 / -1;
        grid-column: 1 / -1;
        width: 100%;
        height: 100%;
        opacity: 0.25;
    `};
    &:hover,
    &:focus {
        background-color: ${colors.white};
        animation: ${keyFramesRight} .5s ease-in-out;
        top: -6px;
        left: 30px;
        z-index: 5;
        transform: scaleX(1);
        box-shadow: -10px 15px 8px -5px ${colors.shadowBlue};
        &:before,
        ${ImgContainer} {
            background: transparent;
            filter: none;
        };
        ${media.desktop`
            animation: ${keyFramesTop} .5s ease-in-out;
            top: -35px;
            left: 0;
        `};
    }
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        border-radius: 15px;
        transition: ${theme.transition};
        background-color: ${colors.logoHover};
        mix-blend-mode: screen;
    }
`;
const Hold = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    /* grid-gap: 10px; */
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px;
    ${media.desktop`
        grid-template-rows: repeat(12, 1fr);
        grid-template-columns: none;
        margin-bottom: 70px;
        text-align: center;
    `};
    &:last-of-type {
        margin-bottom: 0;
    }
    ${Cover}&:hover ~ ${StyledContent} {
        border: 0.5px solid ${colors.green};
    }
    &:nth-of-type(even) {
        ${StyledContent} {
            grid-column: -1 / 6;
            text-align: right;
            box-shadow: 10px 10px 18px 5px ${colors.shadowBlue};
            ${media.desktop`
                grid-row: 5 / -1;
                grid-column: 1 / -1;
                z-index: 5;
                text-align: center;
            `};
            ${media.thone`
                grid-row: 1 / -1;
                grid-column: 1 / -1;
                background-color: transparent;
                z-index: 5;
            `};
        }
        ${Cover} {
            grid-column: 7 / -1;
            transform: rotateY(165deg);
            transform-origin: 50% 50% 100px;
            ${media.desktop`
                grid-row: span 12 / -1;
                grid-column: 1 / -1;
                height: 40px;
                width: 90%;
                margin: 0 auto;
                transform: rotateY(0deg);
                display: none;
            `};
        }
        ${Links} {
            justify-content: flex-end;
            margin-left: 0;
            margin-right: 25px;
            ${media.desktop`
                justify-content: center;
                margin-right: 0px;
                width: 100%;
            `};
        }
        ${Desc} {
            padding: 12px 30px 0px 65px;
            ${media.desktop`
                padding: 0 20px;
            `};
        }
        ${Built} {
            justify-content: flex-end;
            margin: 0 30px 25px 0;
            li {
                margin-right: 0px;
                margin-left: 20px;
            }
            ${media.desktop`
                justify-content: center;
                align-items: center;
                margin: 0;
                width: 100%;
            `};
        }
        ${StyledImg} {
            grid-column: 1 / 7;
            box-shadow: -20px 10px 8px -10px ${colors.shadowBlue};
            &:hover,
            &:focus {
                animation: ${keyFramesLeft} .5s ease-in-out;
                top: -6px;
                left: -30px;
                z-index: 5;
                box-shadow: 10px 15px 8px -5px ${colors.shadowBlue};
                ${media.desktop`
                    animation: ${keyFramesTop} .5s ease-in-out;
                    top: -35px;
                    left: 0;
                `};
            }
            ${media.desktop`
                grid-row: 1 / 7;
                grid-column: 1 / -1;
                height: 300px;
                width: 80%;
                max-width: 480px;
                margin: 0 auto;
            `};
            ${media.thone`
                grid-row: 1 / -1;
                grid-column: 1 / -1;
                width: 100%;
                height: 100%;
                opacity: 0.25;
            `};
        }
    }
`;

const Project = ({ data }) => {
    const project = data.filter(({node}) => node);
    const revealTitle = useRef(null);
    const revealProject = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        revealProject.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

  return (
    <StyledContainer id="projects">
        <Heading ref={revealTitle} width="90px" min="70px"><span className="one">Proj</span><span className="two">ects</span></Heading>
        <div>
            {project && project.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { android, ios, external, title, github, built, cover} = frontmatter;

                return(
                    <Hold key={i} ref={el => (revealProject.current[i] = el)}>
                        <StyledContent>
                                    <Label>
                                        {external ? (
                                            <a
                                            href={external}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label="External Link">
                                                {title}
                                            </a>
                                        ):(
                                            title
                                        )}
                                    </Label>
                                    <Links>
                                        {android && (
                                            <a
                                            href={android}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label="Android Link">
                                                <FormattedIcon name="Android" />
                                            </a>
                                        )}
                                        {ios && (
                                            <a
                                            href={ios}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label="iOS Link">
                                                <FormattedIcon name="iOS" />
                                            </a>
                                        )}
                                        {github && (
                                            <a
                                            href={github}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label="Github Link">
                                                <FormattedIcon name="GitHub" />
                                            </a>
                                        )}
                                        {external && (
                                            <a
                                            href={external}
                                            target="_blank"
                                            rel="nofollow noopener noreferrer"
                                            aria-label="External Link">
                                                <FormattedIcon name="External" />
                                            </a>
                                        )}
                                    </Links>
                                    <Desc dangerouslySetInnerHTML={{__html: html}} />
                                    {built && (
                                        <Built>
                                            {built.map((built, i) => (
                                                <li key={i}>{built}</li>
                                            ))}
                                        </Built>
                                    )}
                        </StyledContent>
                        <StyledImg
                            href={external ? external : github ? github : '#'}
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            <ImgContainer fluid={cover.childImageSharp.fluid} alt={title} />
                        </StyledImg>
                        <Cover></Cover>
                    </Hold>
                );
            })}
        </div>
    </StyledContainer>
  );
}

export default Project;