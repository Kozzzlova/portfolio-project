import React from 'react';
import { Skill } from './skill/Skill';
import { S } from './Skills_styles';

const skillData = [
   {
      title: 'React',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
   {
      title: 'Styled Components',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
   {
      title: 'Figma',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
   {
      title: 'HTML',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
   {
      title: 'CSS',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
   {
      title: 'Design',
      descriprion:
         'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
   },
];

export const Skills = () => {
   return (
      <S.Skills id='skills'>
         <S.SkillsWrapper>
            {skillData.map((s, index) => {
               return (
                  <Skill
                     title={s.title}
                     key={index}
                     description={s.descriprion}></Skill>
               );
            })}
         </S.SkillsWrapper>
      </S.Skills>
   );
};
