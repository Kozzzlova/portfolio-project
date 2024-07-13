import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { SocialList } from '../../components/socialList/SocialList';

export const Footer: React.FC = () => {
   return (
      <StyledFooter>
         <Container>
            <FlexWrapper
               justify='space-between'
               align='center'>
               <Copyright>
                  <span>2022 Relume.</span>
                  <span> All right reserved.</span>
               </Copyright>

               <SocialList />
            </FlexWrapper>
         </Container>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   padding-top: 64px;
   padding-bottom: 55px;
   color: ${Theme.colors.darkMain};

   @media ${Theme.media.tablet} {
      padding: 22px 0;
   }
`;
const Copyright = styled.small`
   font-family: Roboto;
   font-size: 14px;

   @media ${Theme.media.mobile} {
      span {
         &:last-child {
            display: none;
         }
      }
   }
`;
