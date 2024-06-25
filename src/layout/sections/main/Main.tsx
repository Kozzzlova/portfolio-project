import React from 'react';
import photo from '../../../assets/images/photo.png';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';

export const Main = () => {
   return (
      <StyledMain>
         <FlexWrapper
            align={'center'}
            justify={'space-between'}>
            <div>
               <SectionTitle>HELLO I’M ABBY</SectionTitle>
               <MainTItle>UI/UX designer based in UK</MainTItle>
            </div>
            <Photo
               src={photo}
               alt=''
            />
         </FlexWrapper>
      </StyledMain>
   );
};

const StyledMain = styled.div`
   min-height: 70vh;
   background-color: #b4cee6;
`;

const MainTItle = styled.h1``;

const Photo = styled.img`
   width: 300px;
   height: 300px;
   object-fit: cover;
`;
