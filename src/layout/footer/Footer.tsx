import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../components/menu/Menu';
import { Icon } from '../../components/icon/Icon';
import { Theme } from '../../styles/Theme';

export const Footer = () => {
   return (
      <StyledFooter>
         <Copyright>2022 Relume. All right reserved.</Copyright>

         <SocialList>
            <SocialItem>
               <SocialLink>
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
               <SocialLink>
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
               <SocialLink>
                  <Icon
                     width='24px'
                     height='24px'
                     viewBox='0 0 24 24'
                     iconId='twitterSvg'
                  />
               </SocialLink>
            </SocialItem>

            <SocialItem>
               <SocialLink>
                  <Icon
                     width='24px'
                     height='24px'
                     viewBox='0 0 24 24'
                     iconId='linkedinSvg'
                  />
               </SocialLink>
            </SocialItem>
         </SocialList>
      </StyledFooter>
   );
};

const StyledFooter = styled.footer`
   display: flex;
   justify-content: space-between;
`;
const Copyright = styled.small``;
const SocialList = styled.ul`
   display: flex;
   justify-content: flex-end;
   gap: 15px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
