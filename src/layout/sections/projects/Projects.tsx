import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { ProjectsList } from './projectsList/ProjectList';
import { S } from './Projects_styles';
export const Projects = () => {
   return (
      <S.Projects>
         <Container>
            <FlexWrapper
               direction='column'
               rowGap='55px'>
               <SectionTitle>My projects</SectionTitle>
               <ProjectsList />
            </FlexWrapper>
         </Container>
      </S.Projects>
   );
};
