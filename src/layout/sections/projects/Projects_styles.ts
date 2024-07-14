import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

//Projects
const Projects = styled.section`
   padding: 170px 0;

   @media ${Theme.media.pc} {
      padding: 100px 0;
   }

   ${SectionTitle} {
      line-height: 1;
      max-width: clamp(
         320px,
         calc((100vw - 375px) / (1440 - 375) * (770 - 320) + 320px),
         770px
      );
      font-size: clamp(
         60px,
         calc((100vw - 375px) / (1440 - 375) * (120 - 65) + 65px),
         150px
      );
   }
`;

//Projects List

const ProjectsList = styled(FlexWrapper)`
   @media ${Theme.media.tablet} {
      row-gap: 59px;
   }
`;

//Project

const Project = styled.div`
   color: ${Theme.colors.lightMain};
   position: relative;
   min-height: 447px;
   padding: 92px 46px 100px;
   display: flex;
   justify-content: space-between;
   gap: 81px;
   @media ${Theme.media.tablet} {
      min-height: 525px;
      flex-direction: column;
      justify-content: flex-start;
      gap: 23px;
      padding: 60px 20px 80px;
   }
   @media ${Theme.media.mobile} {
      min-height: 620px;
   }
`;

const Image = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   object-fit: cover;

   filter: brightness(0.5);
   -ms-filter: brightness(0.5);
   -webkit-filter: brightness(0.5);
`;

const ProjectTopic = styled.div`
   z-index: 2;
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 16px;
   flex: 0 0 46%;

   @media ${Theme.media.tablet} {
      flex-basis: auto;
   }
`;
const ProjectContent = styled.div`
   z-index: 2;
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 49px;
   justify-content: flex-end;
   flex: 0 0 46%;
   @media ${Theme.media.tablet} {
      flex-basis: auto;
      gap: 23px;
   }
`;

const ProjectSubtitle = styled.h3`
   font-size: 16px;
   font-weight: 600;
   @media ${Theme.media.tablet} {
      font-size: 15px;
   }
`;

const ProjectTitle = styled.h4`
   font-size: 45px;
   font-weight: 800;
   height: 160px;
   display: -webkit-box;
   -webkit-line-clamp: 3; //
   -webkit-box-orient: vertical;
   overflow: hidden;

   span {
      font-weight: 200;
   }

   @media ${Theme.media.tablet} {
      font-size: 43px;
      height: 152px;
   }
`;
const ProjectText = styled.p`
   font-size: 18px;
   line-height: 27px;
   height: 138px;
   display: -webkit-box;
   -webkit-line-clamp: 5;
   -webkit-box-orient: vertical;
   overflow: hidden;
`;
const ProjectLink = styled.a`
   display: flex;
   gap: 4px;
   transition: ${Theme.animations.transition};
   width: max-content;

   &:hover {
      scale: 1.1;
   }
`;

export const S = {
   Projects,
   ProjectsList,
   Project,
   Image,
   ProjectTopic,
   ProjectContent,
   ProjectSubtitle,
   ProjectTitle,
   ProjectText,
   ProjectLink,
};
