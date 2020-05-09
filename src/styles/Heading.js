import styled from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fontSizes, fonts } = theme;

const Heading = styled.h3`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: ${fontSizes.h3};
    font-family: ${fonts.Calibre};
    color: ${colors.white};
    margin: 0 0 60px 0;
    z-index: 5;
    span{ &.one {
        color: ${colors.green};
    }}
    span{ &.two {
        color: ${colors.white};
    }}
    ${media.tablet`font-size: 24px`};
    &:after {
        content: '';
        display: block;
        position: absolute;
        left: 53%;
        top: 50%;
        height: 16px;
        width: ${props => props.width};
        box-shadow: -10px 15px 8px -5px ${colors.shadowBlue};
        background-color: ${colors.greenButton};
        ${media.tablet`width: ${props => props.min};`};
    }
`;

export default Heading;