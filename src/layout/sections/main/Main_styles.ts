import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';
import { SectionTitle } from '../../../components/SectionTitle';

//Main

const Main = styled.section`
   /* padding: 133px 0 170px 0; */
   padding: 133px 0 380px 0;
   position: relative;
   overflow: hidden;

   @media ${Theme.media.tablet} {
      padding: 55px 0 415px;
   }
   @media ${Theme.media.mobile} {
      padding-top: 20px;
   }
`;

const TitleWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   z-index: 3;

   ${SectionTitle} {
      max-width: clamp(
         290px,
         calc((100vw - 375px) / (1440 - 375) * (725 - 290) + 290px),
         725px
      );
   }
`;

const PhotoWrapper = styled.div`
   width: 570px;
   height: 570px;
   position: absolute;
   top: 10px;
   right: -48px;

   @media (max-width: 1085px) {
      margin-right: 35px;
   }
   @media ${Theme.media.tablet} {
      left: 50%;
      transform: translateX(-50%);
      top: auto;
      right: auto;
      width: 420px;
      height: 420px;
      bottom: -90%;
      margin-right: 0;
   }

   @media ${Theme.media.mobile} {
      width: 300px;
      height: 300px;
      bottom: auto;
   }
   &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: ${Theme.colors.decoration};
      position: absolute;
      z-index: 1;
      transform: rotate(-8.7deg);
   }
`;

const Photo = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   opacity: 0.9;
   transform: rotate(7.5deg);
   z-index: 2;
   display: inline-block;
   position: absolute;
   top: 0;
   left: 0;
`;

// Main title

const MainTItle = styled.h1`
   text-align: center;
   font-size: 22px;
   user-select: none;
   width: 100%;
   max-width: 655px;
   /* height: 200px; */
   /* position: relative; */
   position: absolute;
   z-index: 2;

   @media ${Theme.media.tablet} {
      max-width: 486px;
      height: 150px;
   }
   @media ${Theme.media.mobile} {
      max-width: 357px;
      height: 105px;
   }

   svg {
      font-family: Epilogue, sans-serif;
      font-size: 52px;
      font-weight: 300;
      line-height: 1;
      width: 100%;
      /* height: 200px; */
      @media ${Theme.media.pc} {
         font-size: 44px;
      }
      @media ${Theme.media.tablet} {
         font-size: 36px;
      }
      @media ${Theme.media.mobile} {
         font-size: 28px;
      }
   }
`;

const BorderSpan = styled.tspan`
   font-weight: 600;
   -webkit-text-stroke: 1px #0d0f16;
   text-transform: uppercase;
`;

const BoldSpan = styled.tspan`
   font-weight: 800;
`;

export const S = {
   Main,
   TitleWrapper,
   PhotoWrapper,
   Photo,
   MainTItle,
   BorderSpan,
   BoldSpan,
};
