import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import projectFirstImg from '../../../assets/images/proj-1.webp';
import projectSecondImg from '../../../assets/images/proj-2.webp';
import projectThirdImg from '../../../assets/images/proj-3.webp';
export const Projects = () => {
   return (
      <StyledProjects>
         <SectionTitle>My projects</SectionTitle>
         <FlexWrapper
            direction='column'
            align='center'>
            <Project
               subtitle='Mental Health'
               titleSpan='A Case Study_'
               title='Find Peace in Meditation'
               text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
               src={projectFirstImg}></Project>
            <Project
               subtitle='Fashion Show'
               titleSpan='A Case Study_'
               title='Enjoy Fashion Shows From Home'
               text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
               src={projectSecondImg}></Project>
            <Project
               subtitle='Barbeque'
               titleSpan='Branding_'
               title='Chicken Barbeque Never Goes Wrong'
               text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
               src={projectThirdImg}></Project>
         </FlexWrapper>
      </StyledProjects>
   );
};

const StyledProjects = styled.section`
   min-height: 50vh;
   background-color: #a9d6a9;
`;
