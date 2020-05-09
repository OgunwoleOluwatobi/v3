import React from 'react';
import styled from 'styled-components';
import { socialMedia } from '../config';
import FormattedIcon from './icons/formattedIcons';
import {theme, media} from '@styles';
const { colors } = theme;

const StyledIcon = styled.div`
    width: 40px;
    position: fixed;
    bottom: 0;
    left: 40px;
    z-index: 10;
    ${media.desktop`left: 25px;`};
    ${media.tablet`display: none;`};
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    &:after {
        content: '';
        display: block;
        width: 1.5px;
        height: 90px;
        margin: 0 auto;
        background-color: ${colors.dustyWhite};
    }

    li:last-of-type {
        margin-bottom: 20px;
    }
`;
const StyledLink = styled.a`
    padding: 1px;
    &:hover,
    &:focus {
        transform: translateY(-3px);
        svg {
            fill: ${colors.green};
        }
    }
    svg {
        width: 18px;
        height: 18px;
        fill: ${colors.dustyWhite};
    }
`;

const Social = () => {
    return (
        <StyledIcon>
            <StyledList>
                {socialMedia && socialMedia.map(({ url, name }, i) => (
                    <li key={i}>
                        <StyledLink 
                         href={url}
                         target="_blank"
                         rel="nofollow noopener noreferrer"
                         aria-label={name}>
                             <FormattedIcon name={name} />
                         </StyledLink>
                    </li>
                ))}
            </StyledList>
        </StyledIcon>
    )
}

export default Social;