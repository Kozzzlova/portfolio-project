import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';

export const Skills = () => {
   return (
      <StyledSkills>
         <FlexWrapper
            wrap='wrap'
            gap='8px'>
            <Skill
               title='React'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               title='Styled Components'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               title='Figma '
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               title='HTML'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               title='CSS'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               title='Design'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
         </FlexWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   background-color: black;
   min-height: 50vh;
`;
