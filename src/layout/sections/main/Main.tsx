import React from 'react';
import photo from '../../../assets/images/photo.png';
import photo2x from '../../../assets/images/photo@2x.png';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { MainTitle } from './MainTItle';
import { S } from './Main_styles';

export const Main: React.FC = () => {
   return (
      <S.Main>
         <Container>
            <S.TitleWrapper>
               <SectionTitle>HELLO I’M ABBY</SectionTitle>
               <MainTitle />
            </S.TitleWrapper>
            <S.PhotoWrapper>
               {' '}
               <S.Photo
                  src={photo}
                  alt='Main Photo'
                  srcSet={`${photo2x} 2x`}
               />
            </S.PhotoWrapper>
         </Container>
      </S.Main>
   );
};
