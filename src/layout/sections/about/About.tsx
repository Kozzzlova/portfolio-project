import React from 'react';
import { Container } from '../../../components/Container';
import { AboutContent } from './aboutContent/AboutContent';
import { S } from './About_styles';

export const About: React.FC = () => {
   return (
      <S.About>
         <Container>
            <AboutContent />
         </Container>
      </S.About>
   );
};
