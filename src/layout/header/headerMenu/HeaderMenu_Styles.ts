import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../../styles/Theme';

//Desktop menu

const DesktopMenu = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 32px;
`;

//Mobile menu

const MobileMenu = styled.div<{ isOpen: boolean }>`
   justify-content: flex-end;
   align-items: center;
   gap: 27px;
   display: flex;

   ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
         position: fixed;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background-color: ${Theme.colors.mobileBg};
         z-index: 10;
         align-items: flex-start;
         justify-content: flex-start;
         flex-direction: column;
         padding: 45px 35px 0;
      `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
   width: 24px;
   height: 24px;
   display: flex;
   align-items: center;
   padding: 0 3px;
   cursor: pointer;

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

   ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
         position: absolute;
         top: 35px;
         right: 20px;
         z-index: 11;
         width: 20px;
         height: 20px;

         span {
            background-color: transparent;

            &::before,
            &::after {
               background-color: ${Theme.colors.mobileElements};
               bottom: 0;
               transform: translateY(0);
            }
            &::before {
               transform: rotate(-45deg);

               top: auto;
            }

            &::after {
               transform: rotate(45deg);
            }
         }
      `}
`;

export const S = {
   DesktopMenu,
   MobileMenu,
   BurgerButton,
};
