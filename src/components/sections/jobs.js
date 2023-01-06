import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { theme, Section, Heading } from '@styles';
import { Range } from '../icons';
const { fonts, colors, fontSizes } = theme;

const Container = styled(Section)`
    position: relative;
`;
const StyledContent = styled.div`
    display: flex;
    justify-content: space-around;
`;
const Content = styled.div`
    max-width: 18rem;
    max-height: 40rem;
    background-color: ${colors.hamblue};
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    margin: 0px 5px;
    border-radius: 15px;
    box-shadow: 10px 15px 8px -5px ${colors.shadowBlue};
`;
const Title = styled.h4`
    color: ${colors.green};
    font-size: ${fontSizes.xxl};
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
    span a {
        color: ${colors.dustyWhite};
        text-decoration: underline;
        &:hover{
            color: ${colors.green};
            cursor: pointer;
        }
    }
`;
const Hold = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 0 0 10px;
    svg {
        width: 20px;
    }
`;
const More = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`;
const Company = styled.h5`
    color: ${colors.dustyWhite};
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    font-weight: normal;
    letter-spacing: 0.05em;
    padding-left: 20px;
    position: relative;
    a {
        text-decoration: none;
        &:hover {
            color: ${colors.green};
            cursor: pointer;
        }
    }
    &:before{
        content: '@';
        position: absolute;
        left: 0;
        color: ${colors.green};
        font-size: ${fontSizes.sm};
        line-height: 12px;
    }
`;
const Duration = styled.h5`
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.smish};
    font-weight: normal;
    letter-spacing: 0.05em;
    color: ${colors.dustyWhite};
    padding-left: 20px;
    position: relative;
    &:before{
        content: '-';
        position: absolute;
        left: 0;
        color: ${colors.green};
        font-size: ${fontSizes.sm};
        line-height: 12px;
    }
`;

const Jobs = ({ data }) => {
    const revealTitle = useRef(null);
    const revealJobs = useRef([]);

    useEffect(() => {
        sr.reveal(revealTitle.current, srConfig());
        revealJobs.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    return (
        <Container id="experience">
            <Heading ref={revealTitle} width="100px" min="90px"><span className="one">Work&nbsp;</span><span className="two">Experience</span></Heading>
            <StyledContent>
                {/* {data && data.map(({ node }, i) => {
                    const { frontmatter } = node;
                    const { title, company, range } = frontmatter; */}
                    {/* return(
                        <div>
                        { data.length% 2 === 0 && i  === data.length - 1 ? <></> :  */}
                        <Content ref={el => (revealJobs.current[1] = el)}>
                            <Title>{data[0].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[0].node.frontmatter.company}</a></Company>
                                    <Duration>{data[0].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                            <Title>{data[1].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[1].node.frontmatter.company}</a></Company>
                                    <Duration>{data[1].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                            {/* <Title>Future&nbsp;<span><a href={`mailto:${email}`}>you decide.</a></span></Title> */}
                        </Content>
                        
                        <Content ref={el => (revealJobs.current[2] = el)}>
                            <Title>{data[2].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[2].node.frontmatter.company}</a></Company>
                                    <Duration>{data[2].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                            <Title>{data[3].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[3].node.frontmatter.company}</a></Company>
                                    <Duration>{data[3].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                        </Content>
                        
                        <Content ref={el => (revealJobs.current[3] = el)}>
                            <Title>{data[4].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[4].node.frontmatter.company}</a></Company>
                                    <Duration>{data[4].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                            <Title>{data[5].node.frontmatter.title}</Title>
                            <Hold>
                                <Range />
                                <More>
                                    <Company><a href="/">{data[5].node.frontmatter.company}</a></Company>
                                    <Duration>{data[5].node.frontmatter.range}</Duration>
                                </More>
                            </Hold>
                            <Title>Future&nbsp;<span><a href={`mailto:${email}`}>you decide.</a></span></Title>
                        </Content>
                {/*     )
                 })} */}
                {/* <Title>Future&nbsp;<span><a href={`mailto:${email}`}>you decide.</a></span></Title> */}
            </StyledContent>
        </Container>
    )
}

export default Jobs;