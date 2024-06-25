import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photoImg from '../../../assets/images/photo.png';

export const About = () => {
   return (
      <StyledAbout>
         <FlexWrapper
            width='50%'
            direction='column'>
            <AboutTitle>About me</AboutTitle>
            <AboutSlogan>
               I look at usual things with my unsual eyes.
            </AboutSlogan>
            <Image
               width='523px'
               height='438px'
               src={photoImg}></Image>
         </FlexWrapper>
         <FlexWrapper
            width='50%'
            direction='column'>
            <AboutText>
               <AboutParagraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  varius faucibus massa sollicitudin amet augue. Nibh metus a
                  semper purus mauris duis. Lorem eu neque, tristique quis duis.
                  Nibh scelerisque ac adipiscing velit non nulla in amet
                  pellentesque.
               </AboutParagraph>
               <AboutParagraph>
                  Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                  consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                  lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec,
                  habitasse vulputate. Eget dictum quis est sed egestas tellus,
                  a lectus. Quam ullamcorper in fringilla arcu aliquet fames
                  arcu.Lacinia eget faucibus urna, nam risus nec elementum cras
                  porta.{' '}
               </AboutParagraph>
               <AboutParagraph>
                  Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
                  pulvinar vulputate sit sagittis in eleifend dignissim. Natoque
                  mauris cras molestie velit. Maecenas eget adipiscing quisque
                  viverra lectus arcu, tincidunt ultrices pellentesque.
               </AboutParagraph>
            </AboutText>
            <Image
               width='440px'
               height='411px'
               src={photoImg}></Image>
         </FlexWrapper>
      </StyledAbout>
   );
};

const StyledAbout = styled.section`
   background-color: black;
   color: white;
   min-height: 50vh;
   display: flex;
   gap: 63px;
`;

const AboutTitle = styled.h4``;

const AboutSlogan = styled.p``;

const Image = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   object-fit: cover;
`;

const AboutText = styled.div``;

const AboutParagraph = styled.p``;
