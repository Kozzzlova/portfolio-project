import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../styles/Theme';

type StyledMenuPropsType = {
   isOpen: boolean;
   isHidden: boolean;
};

const Menu = styled.ul<StyledMenuPropsType>`
   justify-content: flex-end;
   align-items: center;
   gap: 32px;
   display: ${(props) => (props.isHidden === true ? 'none' : 'flex')};

   ${(props) =>
      props.isOpen === true &&
      css<StyledMenuPropsType>`
         flex-direction: column;
         align-items: flex-start;
         justify-content: flex-start;
         width: 100%;

         @media ${Theme.media.tablet} {
            display: flex;
         }

         li {
            @media ${Theme.media.tablet} {
               padding: 10px;
               width: 100%;

               &::after {
                  content: '';
                  display: block;
                  position: absolute;
                  bottom: 0px;
                  left: 0;
                  right: 0;
                  height: 1px;
                  background-color: ${Theme.colors.mobileElements};
               }
            }
         }
      `}
`;

const ListItem = styled.li`
   position: relative;
   font-size: 16px;

   &:hover {
      text-shadow: -8px -8px rgba(0, 0, 0, 0.3);
   }

   @media ${Theme.media.tablet} {
      font-size: 20px;
   }
   @media ${Theme.media.mobile} {
      font-size: 14px;
   }
`;

const Link = styled.a`
   width: 100%;
   display: inline-block;
   cursor: pointer;
`;

export const S = {
   Menu,
   ListItem,
   Link,
};
