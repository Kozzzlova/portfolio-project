import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../../styles/Theme';
import { Icon } from '../../../../components/icon/Icon';

type ProjectPropsType = {
   title: string;
   titleSpan: string;
   subtitle: string;
   text: string;
   src: string;
   src2x: string;
};

export const Project = (props: ProjectPropsType) => {
   return (
      <StyledProject>
         <Image
            src={props.src}
            alt='Фон проекта'
            srcSet={`${props.src2x} 2x`}
         />

         <ProjectTopic>
            <ProjectSubtitle>{props.subtitle}</ProjectSubtitle>
            <ProjectTitle>
               <span>{props.titleSpan}_</span>
               <br />
               {props.title}
            </ProjectTitle>
         </ProjectTopic>

         <ProjectContent>
            <ProjectText>{props.text}</ProjectText>
            <ProjectLink href={'#'}>
               View More
               <Icon
                  width='16px'
                  height='16px'
                  viewBox='0 0 16 16'
                  iconId='arrowRightSvg'
               />
            </ProjectLink>
         </ProjectContent>
      </StyledProject>
   );
};

const StyledProject = styled.div`
   color: ${Theme.colors.lightMain};
   position: relative;
   height: 447px;
   padding: 100px 46px;
   display: flex;
   justify-content: space-between;
   gap: 81px;

   /* 
   &::after {
      position: absolute;
      content: '';
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 1;
      top: 0;
      left: 0;
   } */
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
`;
const ProjectContent = styled.div`
   z-index: 2;
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 49px;
   justify-content: flex-end;
   flex: 0 0 46%;
`;

const ProjectSubtitle = styled.h3`
   font-size: 16px;
   font-weight: 600;
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

   &:hover {
      font-weight: 600;
   }

   :hover svg {
      stroke-width: 1px;
      stroke: ${Theme.colors.lightMain};
   }
`;
