import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Skill } from './skill/Skill';

export const Skills = () => {
   return (
      <StyledSkills>
         <SkillsWrapper
         // wrap='wrap'
         // justify='stretch'
         // colGap='8px'
         // rowGap='59px'>
         >
            <Skill
               order={1}
               title='React'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               order={2}
               title='Styled Components'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               order={3}
               title='Figma '
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               order={4}
               title='HTML'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               order={5}
               title='CSS'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
            <Skill
               order={6}
               title='Design'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Accusantium ullam nesciunt nemo vero, quo voluptatibus sequi quis
               sint! Labore, maxime?'></Skill>
         </SkillsWrapper>
      </StyledSkills>
   );
};

const StyledSkills = styled.section`
   background-color: black;
   padding: 102px 52px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const SkillsWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   row-gap: 59px;
   column-gap: 8px;
`;
