import React from 'react';
import styled from 'styled-components';
import { theme, media } from '@styles';
import { FormattedIcon } from './icons';
import { socialMedia } from '@config';
const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 70px;
    text-align: center;
    height: auto;
    padding: 15px;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    line-height: 1;
    color: ${colors.dustyWhite};
`;
const StyledSocial = styled.div`
    text-align: center;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 15px;
    background-color: ${colors.logoHover};
    border-radius: 5px;
    align-items: center;
    display: none;
    ${media.tablet`display: block`};
`;
const SocialList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 0;
    margin: auto 0;
    list-style: none;
`;
const SocialLinkList = styled.li`
    margin: auto 0;
`;
const SocialLink = styled.a`
    padding: 10px;
    svg {
        width: 22px;
        height: 22px;
        fill: ${colors.dustyWhite};
        &:hover,
        &:focus,
        &:active {
            fill: ${colors.hamblue};
        }
    }
`;

const Footer = () => {
    return (
        <StyledContainer>
            <StyledSocial>
                <SocialList>
                    {socialMedia && socialMedia.map(({name, url}, i) => (
                        <SocialLinkList key={i}>
                            <SocialLink
                                href={url}
                                target="_blank"
                                rel="nofollow noopenner noreferrer"
                                aria-label={name}>
                                    <FormattedIcon name={name} />
                                </SocialLink>
                        </SocialLinkList>
                    ))}
                </SocialList>
            </StyledSocial>
            <div>Designed and Built by Oluwatobi Ogunwole</div>
        </StyledContainer>
    )
}

export default Footer;