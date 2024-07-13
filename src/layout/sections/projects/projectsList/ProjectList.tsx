import React from 'react';
import { Project } from '../project/Project';
import projectFirstImg from '../../../../assets/images/proj-1.webp';
import projectFirstImg2x from '../../../../assets/images/proj-1@2x.png';
import projectSecondImg from '../../../../assets/images/proj-2.webp';
import projectSecondImg2x from '../../../../assets/images/proj-2@2x.png';
import projectThirdImg from '../../../../assets/images/proj-3.webp';
import projectThirdImg2x from '../../../../assets/images/proj-3@2x.png';
import { S } from '../Projects_styles';

const projectData = [
   {
      subtitle: 'Mental Health',
      titleSpan: 'A Case Study',
      title: 'Find Peace in Meditation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      src: projectFirstImg,
      src2x: projectFirstImg2x,
   },
   {
      subtitle: 'Fashion Show',
      titleSpan: 'A Case Study',
      title: 'Enjoy Fashion Shows From Home',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      src: projectSecondImg,
      src2x: projectSecondImg2x,
   },
   {
      subtitle: 'Barbeque',
      titleSpan: 'Branding',
      title: 'Chicken Barbeque Never Goes Wrong',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      src: projectThirdImg,
      src2x: projectThirdImg2x,
   },
];

export const ProjectsList = () => {
   return (
      <S.ProjectsList
         direction='column'
         rowGap='78px'
         align='stretch'>
         {projectData.map((p, index) => {
            return (
               <Project
                  key={index}
                  subtitle={p.subtitle}
                  titleSpan={p.titleSpan}
                  title={p.title}
                  text={p.text}
                  src={p.src}
                  src2x={p.src2x}
               />
            );
         })}
      </S.ProjectsList>
   );
};
