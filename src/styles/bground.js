import React from "react"
import styled from 'styled-components';

import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Thirteen, Fourteen, Fifteen, Sixteen, Ninteen, Twenty, TwentyOne, TwentyTwo, TwentyThree} from '@components/icons/Lines';
import media from './media';

const LineOne = styled.div`
  position: absolute;
  top: 53%;
  left: 672px;
  .Line_1 {
      width: 291px;
      ${media.bigDesktop`width: 240px`};
      ${media.desktop`width: 190px`};
      ${media.tablet`width: 150px`};
      ${media.thone`width: 120px`};
      ${media.phablet`width: 0px`};
  };
  ${media.bigDesktop`left: 512px`};
  ${media.desktop`left: 372px`};
  ${media.thone`left: 300px`};
`;//Top Middle Blue

const LineTwo = styled.div`
    position: absolute;
    top: 25%;
    left: 0px;
    .Line_2 {
        width: 152px;
        ${media.bigDesktop`width: 140px`};
    }
    ${media.bigDesktop`top: 32%`};
`;//top Left0 green
const LineThree = styled.div`
    position: absolute;
    top: 234px;
    left: 354px;
    .Line_3 {
        width: 163px;
        ${media.bigDesktop`width: 153px`};
        ${media.desktop`width: 143px`};
        ${media.tablet`width: 130px`};
        ${media.thone`width: 100px`};
    }
    ${media.bigDesktop`left: 300px`};
    ${media.desktop`left: 185px`};
    ${media.thone`left: 145px`};
    ${media.phablet`display: none`};
`;//top V pink
const LineFour = styled.div`
    position: absolute;
    top: 0px;
    left: 122px;
    .Line_4 {
        width: 100px;
        ${media.tablet`width: 80px`};
        ${media.phone`width: 60px`};
    }
    ${media.desktop`left: 90px`};
    ${media.tablet`left: 40px`};
    ${media.phone`left: 20px`};
`;//Top away from left Orange
const LineFive = styled.div`
    position: absolute;
    top: 0;
    left: 530px;
    .Line_5 {
        width: 100px;
        ${media.desktop`width: 90px`};
        ${media.phone`width: 70px`};
    }
    ${media.bigDesktop`left: 480px`};
    ${media.desktop`left: 330px`};
    ${media.tablet`left: 220px`};
    ${media.phone`left: 150px`};
`;//Top U
const LineSix = styled.div`
    position: absolute;
    top: -9px;
    left: 799px;
    .Line_6 {
        width: 300px;
        ${media.bigDesktop`width: 230px`};
        ${media.desktop`width: 200px`};
        ${media.tablet`width: 150px`};
    }
    ${media.bigDesktop`left: 630px`};
    ${media.desktop`left:465px`};
    ${media.tablet`left:355px`};
    ${media.thone`display:none`};
`;//Top after U yellow
const LineSeven = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    .Line_7 {
        width: 90px;
        ${media.desktop`width: 80px`};
        ${media.phone`width: 70px`};
    }
`;//Top right
const LineEight = styled.div`
    position: absolute;
    top: 30%;
    right: 0px;
    .Line_8 {
        width: 448px;
        ${media.bigDesktop`width: 398px`};
        ${media.desktop`width: 338px`};
        ${media.tablet`width: 288px`};
        ${media.phone`width: 238px`};
    }
    ${media.tablet`top: 26%`};
`;//Top Left Squirggly
const LineNine = styled.div`
    position: absolute;
    top: 79%;
    left: 398px;
    .Line_9 {
        width: 151px;
        ${media.bigDesktop`width: 141px`};
        ${media.tablet`width: 131px`};
        ${media.phone`width: 111px`};
    }
    ${media.bigDesktop`left: 300px`};
    ${media.desktop`left: 200px`};
    ${media.tablet`left: 120px`};
    ${media.phablet`left: 70px`};
    ${media.phone`left: 30px`};
`;//top bottom orange
const LineTen = styled.div`
    position: absolute;
    top: 90%;
    right: 20px;
    .Line_10 {
        width: 190px;
        ${media.bigDesktop`width: 140px`};
        ${media.phone`width: 120px`};
    }
    ${media.phone`top: 100%`};
`;// top Bottom Left Pink
const Lineeleven = styled.div`
    position: absolute;
    top: 145%;
    left: 584px;
    .Line_11 {
        width: 140px;
    }
    ${media.bigDesktop`left: 570px; top: 140%`};
    ${media.desktop`left: 400px; top: 130%`};
    ${media.tablet`left: 300px; top: 120%`};
    ${media.thone`left: 200px; top: 130%`};
    ${media.phablet`left: 100px`};
    ${media.phone`top: 150%; left: 70px`};
`;//second v or upside down l pink only
const LineTwelve = styled.div`
    position: absolute;
    top: 150%;
    left: 30px;
    .Line_3 {
        width: 153px;
        ${media.thone`width: 140px`};
        ${media.phablet`width: 110px`};
    }
    .circ {
        fill: rgba(50, 121, 227, 0.64);
    }
    ${media.bigDesktop`left: 100px`};
    ${media.thone`left: 150px; top: 160%`};
    ${media.phablet`left: 100px`};
    ${media.phone`top: 180%; left: 40px`};
`;
const Linethirteen = styled.div`
    position: absolute;
    top: 170%;
    left: 454px;
    .Line_13 {
        width: 430px;
        ${media.bigDesktop`width: 380px`};
        ${media.desktop`width: 330px`};
        ${media.thone`width: 230px`};
        ${media.phablet`width: 190px`};
    }
    ${media.bigDesktop`left: 354px`};
    ${media.desktop`left: 194px`};
    ${media.tablet`left: 234px`};
    ${media.thone`left: 228px`};
    ${media.phablet`left: 148px`};
    ${media.tiny`display: none`};
`;//second squirgly
const Linefourteen = styled.div`
    position: absolute;
    top: 207%;
    left: 0px;
    .Line_14 {
        width: 250px;
        ${media.desktop`width: 200px`};
        ${media.phablet`width: 150px`};
    }
`;//left of second squirgly
const Linefifteen = styled.div`
    position: absolute;
    top: 190%;
    right: 0px;
    .Line_15 {
        width: 380px;
        ${media.bigDesktop`width: 300px`};
        ${media.desktop`width: 250px`};
    }
    ${media.tablet`display: none`};
`;//right of second squirgly
const Linesixteen = styled.div`
    position: absolute;
    top: 230%;
    right: 0px;
    .Line_16 {
        width: 230px;
        ${media.bigDesktop`width: 200px`};
        ${media.phone`width: 150px`};
    }
    ${media.tablet`top: 220%`};
`;//below right of second squirgly orange
const Lineseventeen = styled.div`
    position: absolute;
    top: 235%;
    left: 288px;
    .Line_9 {
        width: 151px;
        ${media.bigDesktop`width: 130px`};
        ${media.thone`width: 100px`};
    }
    .st1{
        fill: #33DF38;
    }
    ${media.bigDesktop`left: 200px`};
    ${media.desktop`left: 130px`};
    ${media.thone`left: 110px`};
    ${media.phablet`left: 60px`};
`;//green
const Lineeighteen = styled.div`
    position: absolute;
    top: 235%;
    left: 638px;
    .Line_1 {
        width: 290px;
        ${media.bigDesktop`width: 240px`};
        ${media.desktop`width: 200px`};
        ${media.thone`width: 150px`};
    }
    .st1{
        fill: #bdccd4;
    }
    ${media.bigDesktop`left: 548px`};
    ${media.desktop`left: 380px; top: 245%`};
    ${media.thone`left: 295px`};
    ${media.phablet`left: 220px`};
    ${media.phone`display: none`};
`;//big inverted S
const Lineninteen = styled.div`
    position: absolute;
    top: 265%;
    left: 0px;
    .Line_19 {
        width: 182px;
        ${media.bigDesktop`width: 158px`};
        ${media.desktop`width: 128px`};
    }
    .st1 {
        fill: #22e2ff;
    }
    ${media.bigDesktop`top: 255%`};
    ${media.desktop`top: 265%`};
`;//below left of second squirgly 
const Linetwenty = styled.div`
    position: absolute;
    top: 310%;
    left: 530px;
    .Line_20 {
        width: 240px;
        ${media.desktop`width: 200px`};
        ${media.tablet`width: 190px`};
        ${media.thone`width: 170px`};
        ${media.phablet`width: 140px`};
        ${media.phone`width: 130px`};
    }
    ${media.bigDesktop`left: 400px`};
    ${media.desktop`left: 300px; top: 295%`};
    ${media.tablet`left: 190px`};
    ${media.thone`top: 280%`};
    ${media.phone`top: 270%`};
    ${media.tiny`left: 80px`};
`;//below below left of second squirgly yellow
const Linetwentyone = styled.div`
    position: absolute;
    top: 280%;
    right: 0;
    .Line_21 {
        width: 200px;
        ${media.bigDesktop`width: 150px`};
        ${media.thone`width: 130px`};
        ${media.phablet`width: 100px`};
        ${media.phone`width: 80px`};
    }
    ${media.desktop`top: 290%`};
    ${media.tablet`top: 310%`};
    ${media.phone`top: 300%`};
`;//below below right of second squirgly 
const Linetwentytwo = styled.div`
    position: absolute;
    top: 320%;
    right: 300px;
    .Line_22 {
        width: 170px;
        ${media.desktop`width: 150px`};
        ${media.thone`width: 130px`};
        ${media.phablet`width: 105px`};
        ${media.phone`width: 86px`};
    }
    ${media.desktop`top: 338%; right: 230px`};
    ${media.tablet`right: 120px`};
    ${media.thone`right: 90px`};
    ${media.phablet`right: 0px`};
`;//Bottom u of 2nd box
const Linetwentythree = styled.div`
    position: absolute;
    top: 330%;
    left: 0px;
    .Line_23 {
        width: 250px;
        ${media.thone`width: 220px`};
        ${media.phablet`width: 180px`};
        ${media.phone`width: 150px`};
    }
`;//2nd at bottom of second pink
const Third = styled.div`
    position: absolute;
    top: 150rem;
    left: 0;
    right: 0;
    height: 40rem;
`;

const Lineelevenf = styled.div`
    position: absolute;
    top: 45%;
    left: 584px;
    .Line_11 {
        width: 140px;
    }
    ${media.bigDesktop`left: 570px; top: 40%`};
    ${media.desktop`left: 400px; top: 30%`};
    ${media.tablet`left: 300px; top: 20%`};
    ${media.thone`left: 200px; top: 30%`};
    ${media.phablet`left: 100px`};
    ${media.phone`top: 50%; left: 70px`};
`;//second v or upside down l pink only
const LineTwelvef = styled.div`
    position: absolute;
    top: 50%;
    left: 30px;
    .Line_3 {
        width: 153px;
        ${media.thone`width: 140px`};
        ${media.phablet`width: 110px`};
    }
    .circ {
        fill: rgba(50, 121, 227, 0.64);
    }
    ${media.bigDesktop`left: 100px`};
    ${media.thone`left: 150px; top: 60%`};
    ${media.phablet`left: 100px`};
    ${media.phone`top: 80%; left: 40px`};
`;
const Linethirteenf = styled.div`
    position: absolute;
    top: 70%;
    left: 454px;
    .Line_13 {
        width: 430px;
        ${media.bigDesktop`width: 380px`};
        ${media.desktop`width: 330px`};
        ${media.thone`width: 230px`};
        ${media.phablet`width: 190px`};
    }
    ${media.bigDesktop`left: 324px`};
    ${media.desktop`left: 214px`};
    ${media.tablet`left: 234px`};
    ${media.thone`left: 228px`};
    ${media.phablet`left: 148px`};
    ${media.tiny`display: none`};
`;//second squirgly
const Linefourteenf = styled.div`
    position: absolute;
    top: 107%;
    left: 0px;
    .Line_14 {
        width: 250px;
        ${media.desktop`width: 200px`};
        ${media.phablet`width: 150px`};
    }
`;//left of second squirgly
const Linefifteenf = styled.div`
    position: absolute;
    top: 90%;
    right: 0px;
    .Line_15 {
        width: 380px;
        ${media.bigDesktop`width: 300px`};
        ${media.desktop`width: 250px`};
    }
    ${media.tablet`display: none`};
`;//right of second squirgly
const Linesixteenf = styled.div`
    position: absolute;
    top: 130%;
    right: 0px;
    .Line_16 {
        width: 230px;
        ${media.bigDesktop`width: 200px`};
        ${media.phone`width: 150px`};
    }
    ${media.tablet`top: 110%`};
`;//below right of second squirgly orange
const Lineseventeenf = styled.div`
    position: absolute;
    top: 135%;
    left: 288px;
    .Line_9 {
        width: 151px;
        ${media.bigDesktop`width: 130px`};
        ${media.thone`width: 100px`};
    }
    .st1{
        fill: #33DF38;
    }
    ${media.bigDesktop`left: 200px`};
    ${media.desktop`left: 130px`};
    ${media.thone`left: 110px`};
    ${media.phablet`left: 60px`};
`;//green
const Lineeighteenf = styled.div`
    position: absolute;
    top: 135%;
    left: 638px;
    .Line_1 {
        width: 290px;
        ${media.bigDesktop`width: 240px`};
        ${media.desktop`width: 200px`};
        ${media.thone`width: 150px`};
    }
    .st1{
        fill: #bdccd4;
    }
    ${media.bigDesktop`left: 538px`};
    ${media.desktop`left: 370px; top: 145%`};
    ${media.thone`left: 295px`};
    ${media.phablet`left: 220px`};
    ${media.phone`display: none`};
`;//big inverted S
const Lineninteenf = styled.div`
    position: absolute;
    top: 160%;
    left: 0px;
    .Line_19 {
        width: 182px;
        ${media.bigDesktop`width: 158px`};
        ${media.desktop`width: 128px`};
    }
    .st1 {
        fill: #22e2ff;
    }
    ${media.bigDesktop`top: 150%`};
    ${media.desktop`top: 160%`};
`;//below left of second squirgly 
// const Linetwentyf = styled.div`
//     position: absolute;
//     top: 200%;
//     left: 530px;
//     .Line_20 {
//         width: 240px;
//         ${media.desktop`width: 200px`};
//         ${media.tablet`width: 190px`};
//         ${media.thone`width: 170px`};
//         ${media.phablet`width: 140px`};
//         ${media.phone`width: 130px`};
//     }
//     ${media.bigDesktop`left: 400px`};
//     ${media.desktop`left: 300px; top: 175%`};
//     ${media.tablet`left: 190px; top: 170%`};
//     ${media.thone`top: 180%`};
//     ${media.phone`top: 170%`};
//     ${media.tiny`left: 80px`};
// `;//below below left of second squirgly yellow
const Linetwentyonef = styled.div`
    position: absolute;
    top: 170%;
    right: 0;
    .Line_21 {
        width: 200px;
        ${media.bigDesktop`width: 150px`};
        ${media.thone`width: 130px`};
        ${media.phablet`width: 100px`};
        ${media.phone`width: 80px`};
    }
    ${media.desktop`top: 170%`};
    ${media.tablet`top: 120%`};
    ${media.phone`top: 110%`};
`;//below below right of second squirgly 
// const Linetwentytwof = styled.div`
//     position: absolute;
//     top: 220%;
//     right: 300px;
//     .Line_22 {
//         width: 170px;
//         ${media.desktop`width: 150px`};
//         ${media.thone`width: 130px`};
//         ${media.phablet`width: 105px`};
//         ${media.phone`width: 86px`};
//     }
//     ${media.desktop`top: 215%; right: 200px`};
//     ${media.tablet`right: 120px`};
//     ${media.thone`right: 90px`};
//     ${media.phablet`right: 0px`};
// `;//Bottom u of 2nd box
// const Linetwentythreef = styled.div`
//     position: absolute;
//     top: 230%;
//     left: 0px;
//     .Line_23 {
//         width: 250px;
//         ${media.thone`width: 220px`};
//         ${media.phablet`width: 180px`};
//         ${media.phone`width: 150px`};
//     }
// `;//2nd at bottom of second pink

const Bground = () => {
  return (
    <div>
      <div>
        <LineOne><One/></LineOne>
        <LineTwo><Two/></LineTwo>
        <LineThree><Three/></LineThree>
        <LineFour><Four/></LineFour>
        <LineFive><Five/></LineFive>
        <LineSix><Six/></LineSix>
        <LineSeven><Seven/></LineSeven>
        <LineEight><Eight/></LineEight>
        <LineNine><Nine/></LineNine>
        <LineTen><Ten/></LineTen>
      </div>
      <div>
          <Lineeleven><Eleven/></Lineeleven>
          <LineTwelve><Three/></LineTwelve>
          <Linethirteen><Thirteen/></Linethirteen>
          <Linefourteen><Fourteen/></Linefourteen>
          <Linefifteen><Fifteen/></Linefifteen>
          <Linesixteen><Sixteen/></Linesixteen>
          <Lineseventeen><Nine/></Lineseventeen>
          <Lineeighteen><One/></Lineeighteen>
          <Lineninteen><Ninteen/></Lineninteen>
          <Linetwenty><Twenty/></Linetwenty>
          <Linetwentyone><TwentyOne/></Linetwentyone>
          <Linetwentytwo><TwentyTwo/></Linetwentytwo>
          <Linetwentythree><TwentyThree/></Linetwentythree>
      </div>
      <Third>
        <div>
            <LineOne><One/></LineOne>
            <LineTwo><Two/></LineTwo>
            <LineThree><Three/></LineThree>
            <LineSeven><Seven/></LineSeven>
            <LineEight><Eight/></LineEight>
            <LineNine><Nine/></LineNine>
            <LineTen><Ten/></LineTen>
        </div>
      </Third>
      <div style={{
        position: `absolute`,
        top: `180rem`,
        left: `0`,
        right: `0`,
        height: `50rem`,
      }}>
        <Lineelevenf><Eleven/></Lineelevenf>
        <LineTwelvef><Three/></LineTwelvef>
        <Linethirteenf><Thirteen/></Linethirteenf>
        <Linefourteenf><Fourteen/></Linefourteenf>
        <Linefifteenf><Fifteen/></Linefifteenf>
        <Linesixteenf><Sixteen/></Linesixteenf>
        <Lineseventeenf><Nine/></Lineseventeenf>
        <Lineeighteenf><One/></Lineeighteenf>
        <Lineninteenf><Ninteen/></Lineninteenf>
        <Linetwentyonef><TwentyOne/></Linetwentyonef>
      </div>
    </div>
  )
}

export default Bground