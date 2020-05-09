import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '../icons';
import { theme, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const Container = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    text-align: center;
    align-items: center;
    width: 100%;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`}
    /* div {
        position: relative;
        background-size: 150%;
        background-repeat: no-repeat;
        background-position: center;
        padding: 2rem 1.75rem;
        transition: ${theme.transition};
        border-radius: 5px;
        &:after {
            content: attr(data-text);
            position: absolute;
            overflow: hidden;
            bottom: 0;
            right: 0;
            left: 0;
            top: 85%;
            z-index: 10;
            transition: 0.3s ease-in-out;
            background-color: rgba(20, 24, 30, 0.425);
        }
        &:hover {
            cursor: pointer;
            background-size: 160%;
            &:after {
                top: 0;
                padding: 8px;
                border-radius: 5px;
                background-color: rgba(20, 24, 30, 0.7);
            }
        }
    } */
`;
const Hold = styled.div`
    position: relative;
    width: 100%;
    display: block;
    border-radius: 5px;
    overflow: hidden;
    .Imgi {
        display: block;
        height: 250px;
        width: 100%;
        background: ${colors.hamblue};
        transition: ${theme.transition};
        ${media.tablet`transform: scale(1.2)`};
    }
    .Txt {
        position: absolute;
        bottom: 0;
        height: 50px;
        width: 100%;
        background: ${colors.green};
        transition: ${theme.transition};
        background-color: rgba(20, 24, 30, 0.425);
        padding: 15px;
        text-align: left;
        p {
            font-size: 17px;
            margin: 0;
            color: ${colors.dustyWhite};
        }
        /* ${media.tablet`
            height: 100%;
            background-color: rgba(20, 24, 30, 0.9);
        `}; */
    }
    &:hover,
    &:focus,
    &:active {
        .Imgi {
            transform: scale(1.2);
        }
        .Txt {
            height: 100%;
            background-color: rgba(20, 24, 30, 0.9);
        }
    }
    
`;
const Title = styled.h3`
    color: ${colors.white};
    text-align: left;
    margin: 5px 0;
    font-family: ${fonts.Calibre}
`;
const ProjectLinks = styled.div`
    margin-right: 10px;
`;
const LinkIcon = styled.a`
    padding: 10px;
    svg {
        width: 20px;
        height: 20px;
        fill: ${colors.green};
    }
    &:hover {
        svg {
            fill: ${colors.white};
        }
    }
`;
const TechList = styled.ul`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0;
    margin: 10px 0 0;
    list-style: none;

    li {
        font-family: ${fonts.SFMono};
        font-size: ${fontSizes.smish};
        color: ${colors.dustyWhite};
        line-height: 1.75;
        margin-right: 15px;
        &:last-of-type {
            margin-right: 0;
        }
    }
`;
const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
`;

const Projects = ({ data }) => {
    const projects = data.filter(({node}) => node);
    const revealTitle = useRef(null);
    const revealProject = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        revealProject.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    return (
        <Container>
            <Heading ref={revealTitle}><span className="two">Other&nbsp;</span><span className="one">Noteable&nbsp;</span><span className="two">Projects</span></Heading>
            <Content>
                {projects && projects.map(({ node }, i) => {
                        const { frontmatter, html } = node;
                        const { external, title, github, built, bg } = frontmatter;

                        return(
                            <Hold key={i} ref={el => (revealProject.current[i] = el)}>
                                <div className="Imgi">
                                    <StyledImg fluid={bg.childImageSharp.fluid} />
                                </div>
                                <div className="Txt">
                                    <Title>{title}</Title>
                                    <ProjectLinks>
                                        {github && (
                                            <LinkIcon
                                                href={github}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                aria-label="Github Link">
                                                    <FormattedIcon name="GitHub" />
                                                </LinkIcon>
                                        )}
                                        {external && (
                                            <LinkIcon
                                                href={external}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                aria-label="External Link">
                                                    <FormattedIcon name="External" />
                                                </LinkIcon>
                                        )}
                                    </ProjectLinks>
                                    <div dangerouslySetInnerHTML={{__html: html}} />
                                    <TechList>
                                        {built.map((build, i) => (
                                            <li key={i}>{build}</li>
                                        ))}
                                    </TechList>
                                </div>
                            </Hold>
                        )
                })}
            </Content>
        </Container>
    )
}

export default Projects;