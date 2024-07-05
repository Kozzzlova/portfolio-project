import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { Theme } from '../../../styles/Theme';
import { StyledButton } from '../../../components/button/Button';

const items = ['Projects', 'About', 'Digital Assets'];

export const MobileMenu = () => {
   return (
      <StyledMobileMenu>
         <Menu menuItems={items} />
         <StyledButton
            href='#'
            as={'a'}
            btnType='link'>
            Let's talk
         </StyledButton>
         <BurgerButton>
            <span>
               <span></span>
            </span>
         </BurgerButton>
      </StyledMobileMenu>
   );
};

const StyledMobileMenu = styled.div`
   justify-content: flex-end;
   align-items: center;
   gap: 32px;
   display: none;

   @media ${Theme.media.tablet} {
      display: flex;
   }
`;

const BurgerButton = styled.button`
   width: 24px;
   height: 24px;
   display: flex;
   align-items: center;
   padding: 0 3px;

   span {
      display: inline-block;
      width: 3px;
      height: 2px;
      border-radius: 2px;
      background-color: ${Theme.colors.primary};
      position: relative;

      span {
         position: absolute;

         width: 12px;
         left: 6px;
         top: 0;
         &::before,
         &::after {
            display: none;
         }
      }

      &::before,
      &::after {
         content: '';
         display: inline-block;
         width: 18px;
         height: 2px;
         border-radius: 2px;
         background-color: ${Theme.colors.primary};
         position: absolute;
         left: 0;
      }

      &::before {
         top: 5px;
      }
      &::after {
         bottom: 5px;
      }
   }
`;
