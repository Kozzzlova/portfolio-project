import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { S } from '../Projects_styles';
import { Fade } from 'react-awesome-reveal';

type ProjectPropsType = {
   title: string;
   titleSpan: string;
   subtitle: string;
   text: string;
   src: string;
   src2x: string;
};

export const Project: React.FC<ProjectPropsType> = (
   props: ProjectPropsType
) => {
   return (
      <Fade>
         <S.Project>
            <S.Image
               src={props.src}
               alt='Фон проекта'
               srcSet={`${props.src2x} 2x`}
            />

            <S.ProjectTopic>
               <S.ProjectSubtitle>{props.subtitle}</S.ProjectSubtitle>
               <S.ProjectTitle>
                  <span>{props.titleSpan}_</span>
                  <br />
                  {props.title}
               </S.ProjectTitle>
            </S.ProjectTopic>

            <S.ProjectContent>
               <S.ProjectText>{props.text}</S.ProjectText>
               <S.ProjectLink href={'#'}>
                  View More
                  <Icon
                     width='16px'
                     height='16px'
                     viewBox='0 0 16 16'
                     iconId='arrowRightSvg'
                  />
               </S.ProjectLink>
            </S.ProjectContent>
         </S.Project>
      </Fade>
   );
};
