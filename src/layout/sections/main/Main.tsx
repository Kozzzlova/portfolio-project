import React from 'react';
import photo from '../../../assets/images/photo.png';
import photo2x from '../../../assets/images/photo@2x.png';
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
               <SectionTitle maxWidth='660px'>HELLO I’M ABBY</SectionTitle>{' '}
               <MainTItle>
                  <svg
                     height='200'
                     width='656'
                     viewBox='0 0 656 200'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg'>
                     <path
                        d='M-40 20 C 150 150,  330 330,  655 -10'
                        fill='transparent'
                        id='my_path1'
                     />
                     <text
                        x='10'
                        dx='50'
                        y='30'
                        fill='#0D0F16'>
                        <textPath href='#my_path1'>
                           {' '}
                           <BorderSpan
                              fill='transparent'
                              stroke='#0D0F16'>
                              UI
                           </BorderSpan>
                           <tspan>/</tspan>
                           <BorderSpan
                              fill='transparent'
                              stroke='#0D0F16'>
                              UX{' '}
                           </BorderSpan>
                           <BoldSpan>D</BoldSpan>
                           <tspan>esi</tspan>
                           <BoldSpan>g</BoldSpan>
                           <tspan>ne</tspan>
                           <BoldSpan>r</BoldSpan>
                           <tspan> based in UK</tspan>
                        </textPath>{' '}
                     </text>
                  </svg>
               </MainTItle>
            </TitleWrapper>
            <PhotoWrapper>
               {' '}
               <Photo
                  src={photo}
                  alt='Main Photo'
                  srcSet={`${photo2x} 2x`}
               />
            </PhotoWrapper>
         </Container>
      </StyledMain>
   );
};

const StyledMain = styled.section`
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
   text-align: center;
   font-size: 22px;
   user-select: none;
   width: 655px;
   height: 200px;
   position: relative;
   z-index: 2;

   svg {
      font-family: Epilogue, sans-serif;
      font-size: 52px;
      font-weight: 300;
      line-height: 54px;
   }
`;

const BorderSpan = styled.tspan`
   font-weight: 600;
   color: green;
   -webkit-text-stroke: 1px #0d0f16;
   text-transform: uppercase;
`;

const BoldSpan = styled.tspan`
   font-weight: 800;
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
