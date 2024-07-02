import React from 'react';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';
import { Letter } from '../../../components/letter/Letter';

const titleString = 'UI/UX designer based in UK';
const titleMap = Array.from(titleString);

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <TitleWrapper>
               <SectionTitle maxWidth='660px'>HELLO I’M ABBY</SectionTitle>{' '}
               <MainTItle>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
                  <Letter item={'U'}></Letter>
               </MainTItle>
            </TitleWrapper>
            <PhotoWrapper>
               {' '}
               <Photo
                  src={photo}
                  alt='Main Photo'
               />
            </PhotoWrapper>
         </Container>
      </StyledMain>
   );
};

const StyledMain = styled.main`
   padding: 133px 0 225px 0;
   position: relative;
   overflow-x: hidden;
`;

const TitleWrapper = styled.div`
   display: flex;
   flex-direction: column;
   position: relative;
   z-index: 3;
`;

const MainTItle = styled.h1`
   font-size: 52px;
   font-weight: 300;

   position: relative;
   width: 655px;
   height: 193px;
   border-radius: 50%;
   background: #926565;
   border: 10px solid burlywood;
   text-align: center;
   line-height: 192px;
   font-size: 22px;

   user-select: none;

   /* position: relative;
   width: 655px;
   height: 300px;
   border-radius: 50%;
   background-color: aliceblue;
   z-index: 2;
   transform: rotate(180deg) scaleX(-1); */
`;

const PhotoWrapper = styled.div`
   width: 570px;
   height: 570px;
   position: absolute;
   top: 10px;
   right: -48px;
   &:before {
      content: '';
      display: block;
      width: 570px;
      height: 570px;
      top: 0;
      left: 0;
      background-color: ${Theme.colors.decoration};
      position: absolute;
      z-index: 1;
      transform: rotate(-8.7deg);
   }
`;

const Photo = styled.img`
   width: 570px;
   height: 570px;
   object-fit: cover;
   opacity: 0.9;
   transform: rotate(7.5deg);
   z-index: 2;
   display: inline-block;
   position: absolute;
   top: 0;
   left: 0;
`;
