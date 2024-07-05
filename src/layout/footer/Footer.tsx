import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
   return (
      <StyledFooter>
         <Container>
            <FlexWrapper
               justify='space-between'
               align='center'>
               <Copyright>2022 Relume. All right reserved.</Copyright>

               <SocialList>
                  <SocialItem>
                     <SocialLink
                        href='#'
                        aria-label='Ссылка на Facebook'>
                        <Icon
                           width='24px'
                           height='24px'
                           viewBox='0 0 24 24'
                           iconId='facebookSvg'
                        />
                     </SocialLink>
                  </SocialItem>

                  <SocialItem>
                     {' '}
                     <SocialLink
                        href='#'
                        aria-label='Ссылка на Instagram'>
                        <Icon
                           width='24px'
                           height='24px'
                           viewBox='0 0 24 24'
                           iconId='instagramSvg'
                        />
                     </SocialLink>
                  </SocialItem>

                  <SocialItem>
                     {' '}
                     <SocialLink
                        href='#'
                        aria-label='Ссылка на Twitter'>
                        <Icon
                           width='24px'
                           height='24px'
                           viewBox='0 0 24 24'
                           iconId='twitterSvg'
                        />
                     </SocialLink>
                  </SocialItem>

                  <SocialItem>
                     <SocialLink
                        href='#'
                        aria-label='Ссылка на Linkedin'>
                        <Icon
                           width='24px'
                           height='24px'
                           viewBox='0 0 24 24'
                           iconId='linkedinSvg'
                        />
                     </SocialLink>
                  </SocialItem>
               </SocialList>
            </FlexWrapper>
         </Container>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   padding-top: 64px;
   padding-bottom: 55px;
   color: ${Theme.colors.darkMain};
`;
const Copyright = styled.small`
   font-family: Roboto;
   font-size: 14px;
`;
const SocialList = styled.ul`
   display: flex;
   justify-content: flex-end;
   gap: 12px;
`;
const SocialItem = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
`;
const SocialLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
`;
