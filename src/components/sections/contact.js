import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import { theme, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const Container = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 600px;
`;
const Title = styled.h1`
    font-size: 57px;
    color: ${colors.dustyWhite};
    text-align: center;
    ${media.tablet`font-size: 47px;`};
    ${media.thone`font-size: 37px;`};
    ${media.phone`font-size: 30px;`};
`;
const Desc = styled.div`
    color: ${colors.dustyWhite};
    font-size: ${fontSizes.xxl};
    text-align: center;
    margin: 25px 0;
    letter-spacing: 0.03em;
`;
const Button = styled.div`
    background-color: ${colors.greenButton};
    border-radius: 5px;
    transition: ${theme.transition};
    width: 50px;
    height: 50px;
    position: relative;
    left: -10%;
    &:hover{
        left: 0%;
        width: 195px;
        background-color: ${colors.green};
        a {
            color: ${colors.white};
        }
    }
`;
const ButtonText = styled.a`
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    text-decoration: none;
    color: ${colors.green};
    width: 160px;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
`;

const Contact = ({ data }) => {
    const { frontmatter, html }= data[0].node;
    const { subtext, buttonText } = frontmatter;
    const sectionRef = useRef(null);
    const subRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
      sr.reveal(sectionRef.current, srConfig());
      sr.reveal(subRef.current, srConfig(250));
      sr.reveal(buttonRef.current, srConfig(300));
    }, []);

    return (
        <Container id="contact" ref={sectionRef}>
            <Heading width="90px" min="70px"><span className="one">Get in</span><span className="two">&nbsp;Touch</span></Heading>
            <Title ref={subRef}>{subtext}</Title>
            <Desc ref={subRef} dangerouslySetInnerHTML={{ __html:html }}/>
            <Button ref={subRef}><ButtonText href={`mailto:${email}`}>{buttonText} →</ButtonText></Button>
        </Container>
    )
}

export default Contact;