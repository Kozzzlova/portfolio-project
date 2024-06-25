import React from 'react';
import styled from 'styled-components';

type SkillPropsType = {
   title: string;
   description: string;
};

export const Skill = (props: SkillPropsType) => {
   return (
      <StyledSkill>
         <SkillOrder>01.</SkillOrder>
         <SkillText>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillDescription>{props.description}</SkillDescription>
         </SkillText>
      </StyledSkill>
   );
};

const StyledSkill = styled.div`
   color: white;
   width: 30%;
`;
const SkillOrder = styled.p``;
const SkillText = styled.p``;
const SkillTitle = styled.h3``;
const SkillDescription = styled.div``;
