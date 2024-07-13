import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

const About = styled.section`
   padding-top: 110px;
   padding-bottom: 205px;

   @media ${Theme.media.tablet} {
      padding: 50px 0 95px;
   }
`;

const AboutContent = styled(FlexWrapper)`
   @media ${Theme.media.tablet} {
      flex-direction: column;
      row-gap: 40px;
   }

   ${FlexWrapper} {
      @media ${Theme.media.tablet} {
         width: 100%;
      }
   }
`;

const AboutTitle = styled.h4`
   font-size: 16px;
   font-weight: 900;
   margin-bottom: 16px;
`;

const AboutSlogan = styled.p`
   font-size: 48px;
   font-weight: 254;
   margin-bottom: 238px;
   text-transform: uppercase;
   padding-right: 89px;
   line-height: 58px;

   @media ${Theme.media.tablet} {
      font-size: 43px;
      margin-bottom: 14px;
      padding-right: 0;
   }
`;

const ImageLeft = styled.img`
   width: 100%;
   aspect-ratio: 1 / 0.937;
   object-fit: cover;
   display: block;
   @media ${Theme.media.tablet} {
      width: 93%;
   }
`;
const ImageRight = styled.img`
   width: 100%;
   aspect-ratio: 1 / 0.935;
   object-fit: cover;
   display: block;

   @media ${Theme.media.tablet} {
      width: 85%;
      align-self: flex-end;
   }
`;

const AboutText = styled.div`
   font-family: Roboto;
   font-size: 18px;
   line-height: 27px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   margin-bottom: 204px;

   @media ${Theme.media.tablet} {
      margin-bottom: 60px;
   }
`;

export const S = {
   About,
   AboutContent,
   AboutTitle,
   AboutSlogan,
   ImageLeft,
   ImageRight,
   AboutText,
};
