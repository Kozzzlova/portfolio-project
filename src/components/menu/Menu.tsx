import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
   return (
      <StyledMenu role='menu'>
         {props.menuItems.map((item: string, index: number) => {
            return (
               <ListItem
                  role='menuitem'
                  key={index}>
                  <Link href='#'>{item}</Link>
               </ListItem>
            );
         })}
      </StyledMenu>
   );
};

const StyledMenu = styled.ul`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 32px;

   @media ${Theme.media.tablet} {
      display: none;
   }
`;

const Link = styled.a`
   font-size: 16px;
`;

const ListItem = styled.li`
   position: relative;

   &:hover {
      text-shadow: -8px -8px rgba(0, 0, 0, 0.3);
   }
`;
