import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Theme } from '../../styles/Theme';

type SocialListPropsType = {
   isOpen?: boolean;
};

const socialItems = [
   {
      href: '#',
      ariaLabel: 'Ссылка на Facebook',
      iconId: 'facebookSvg',
   },
   {
      href: '#',
      ariaLabel: 'Ссылка на Instagram',
      iconId: 'instagramSvg',
   },
   {
      href: '#',
      ariaLabel: 'Ссылка на Twitter',
      iconId: 'twitterSvg',
   },
   {
      href: '#',
      ariaLabel: 'Ссылка на Linkedin',
      iconId: 'linkedinSvg',
   },
];

export const SocialList = (props: SocialListPropsType) => {
   return (
      <StyledSocialList isOpen={props.isOpen}>
         {socialItems.map((i, index) => {
            return (
               <SocialItem key={index}>
                  <SocialLink
                     href={i.href}
                     aria-label={i.ariaLabel}>
                     <Icon
                        viewBox='0 0 24 24'
                        iconId={i.iconId}
                     />
                  </SocialLink>
               </SocialItem>
            );
         })}
      </StyledSocialList>
   );
};

export const StyledSocialList = styled.ul<SocialListPropsType>`
   display: flex;
   justify-content: flex-end;
   gap: 12px;
   display: ${(props) => (props.isOpen === false ? 'none' : 'flex')};
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

   svg {
      width: 24px;
      height: 24px;

      @media ${Theme.media.mobile} {
         width: 20px;
         height: 20px;
      }
   }
`;
