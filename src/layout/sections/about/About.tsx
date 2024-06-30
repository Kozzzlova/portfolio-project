import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photoImg from '../../../assets/images/photo.png';
import { Container } from '../../../components/Container';

export const About = () => {
   return (
      <StyledAbout>
         <Container>
            <FlexWrapper
               justify='space-between'
               colGap='63px'>
               {' '}
               <FlexWrapper
                  width='50%'
                  direction='column'>
                  <AboutTitle>About me</AboutTitle>
                  <AboutSlogan>
                     I look at unusual things with my unsual eyes.
                  </AboutSlogan>
                  <Image
                     width='532px'
                     height='498px'
                     src={photoImg}></Image>
               </FlexWrapper>
               <FlexWrapper
                  width='50%'
                  direction='column'>
                  <AboutText>
                     <AboutParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce varius faucibus massa sollicitudin amet augue.
                        Nibh metus a semper purus mauris duis. Lorem eu neque,
                        tristique quis duis. Nibh scelerisque ac adipiscing
                        velit non nulla in amet pellentesque.
                     </AboutParagraph>
                     <AboutParagraph>
                        Sit turpis pretium eget maecenas. Vestibulum dolor
                        mattis consectetur eget commodo vitae. Amet pellentesque
                        sit pulvinar lorem mi a, euismod risus rhoncus.
                        Elementum ullamcorper nec, habitasse vulputate. Eget
                        dictum quis est sed egestas tellus, a lectus. Quam
                        ullamcorper in fringilla arcu aliquet fames arcu.Lacinia
                        eget faucibus urna, nam risus nec elementum cras porta.{' '}
                     </AboutParagraph>
                     <AboutParagraph>
                        Sed elementum, sed dolor purus dolor dui. Ut dictum
                        nulla pulvinar vulputate sit sagittis in eleifend
                        dignissim. Natoque mauris cras molestie velit. Maecenas
                        eget adipiscing quisque viverra lectus arcu, tincidunt
                        ultrices pellentesque.
                     </AboutParagraph>
                  </AboutText>
                  <Image
                     width='440px'
                     height='411px'
                     src={photoImg}></Image>
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </StyledAbout>
   );
};

const StyledAbout = styled.section`
   background-color: black;
   color: white;
   min-height: 50vh;
   display: flex;
   gap: 63px;
   padding-top: 109px;
   padding-bottom: 205px;
`;

const AboutTitle = styled.h4`
   font-size: 16px;
   font-weight: 900;
   margin-bottom: 16px;
`;

const AboutSlogan = styled.p`
   font-size: 48px;
   font-weight: 254;
   margin-bottom: 238px;
   text-transform: uppercase;
   padding-right: 89px;
   line-height: 58px;
`;

const Image = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   object-fit: cover;
`;

const AboutText = styled.div`
   font-family: Roboto;
   font-size: 18px;
   line-height: 27px;
   display: flex;
   flex-direction: column;
   gap: 24px;
   margin-bottom: 204px;
`;

const AboutParagraph = styled.p``;
