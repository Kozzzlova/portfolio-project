import React from 'react';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Theme } from '../../../styles/Theme';
import { Container } from '../../../components/Container';

export const Main = () => {
   return (
      <StyledMain>
         <Container>
            <TitleWrapper>
               <SectionTitle maxWidth='660px'>HELLO I’M ABBY</SectionTitle>
               <Circle>
                  {' '}
                  <MainTItle>
                     <Letter>U</Letter>
                     <Letter>I</Letter>
                     <Letter>/</Letter>
                     <Letter>U</Letter>
                     <Letter>X</Letter>
                     <Letter> </Letter>
                     <Letter>d</Letter>
                     <Letter>e</Letter>
                     <Letter>s</Letter>
                     <Letter>i</Letter>
                     <Letter>g</Letter>
                     <Letter>n</Letter>
                     <Letter>e</Letter>
                     <Letter>r</Letter>
                     <Letter> </Letter>
                     <Letter>b</Letter>
                     <Letter>a</Letter>
                     <Letter>s</Letter>
                     <Letter>e</Letter>
                     <Letter>d</Letter>
                     <Letter> </Letter>
                     <Letter>i</Letter>
                     <Letter>n</Letter>
                     <Letter> </Letter>
                     <Letter>U</Letter>
                     <Letter>K</Letter>
                     {/* UI/UX designer based in UK */}
                  </MainTItle>
               </Circle>
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

const Circle = styled.div`
   position: relative;
   width: 400px;
   border-radius: 50%;
   transform: rotate(-50deg);
   height: 110px;
`;

const MainTItle = styled.h1`
   font-size: 52px;
   font-weight: 300;
   text-align: left;
`;

const Letter = styled.span`
   height: 200px;
   position: absolute;
   width: 20px;
   left: 0;
   top: 0;
   transform-origin: bottom center;
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
