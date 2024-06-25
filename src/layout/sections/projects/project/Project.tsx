import React from 'react';
import styled from 'styled-components';

type ProjectPropsType = {
   title: string;
   titleSpan: string;
   subtitle: string;
   text: string;
   src: string;
};

export const Project = (props: ProjectPropsType) => {
   return (
      <StyledProject>
         <Image
            src={props.src}
            alt=''
         />
         <ProjectTopic>
            <ProjectSubtitle>{props.subtitle}</ProjectSubtitle>
            <ProjectTitle>
               <p>{props.titleSpan}</p>
               {props.title}
            </ProjectTitle>
         </ProjectTopic>
         <ProjectContent>
            <ProjectText>{props.text}</ProjectText>
            <ProjectLink href={'#'}>View More</ProjectLink>
         </ProjectContent>
      </StyledProject>
   );
};

const StyledProject = styled.div`
   background-color: #f1f181;
`;

const Image = styled.img`
   height: 447px;
   width: 100%;
   object-fit: cover;
`;
const ProjectTopic = styled.div``;
const ProjectContent = styled.div``;
const ProjectSubtitle = styled.h4``;
const ProjectTitle = styled.h3`
   p {
      color: red;
   }
`;
const ProjectText = styled.p``;
const ProjectLink = styled.a``;
