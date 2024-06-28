import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../button/Button';
import { Theme } from '../../styles/Theme';

export const Menu = (props: { menuItems: Array<string> }) => {
   return (
      <div>
         <StyledMenu>
            <ul>
               {props.menuItems.map((item: string, index: number) => {
                  return (
                     <ListItem key={index}>
                        <Link href='#'>
                           {item}
                           <Mask>
                              <span>{item}</span>
                           </Mask>
                        </Link>
                     </ListItem>
                  );
               })}
            </ul>
            <StyledButton>Let's talk</StyledButton>
         </StyledMenu>
      </div>
   );
};

const StyledMenu = styled.nav`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 32px;

   ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 32px;
   }
`;

const Link = styled.a`
   font-size: 16px;
`;

const Mask = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   display: inline-block;
   overflow-y: hidden;
   color: ${Theme.colors.primary};
   opacity: 0.5;
`;

const ListItem = styled.li`
   position: relative;

   &:hover {
      ${Mask} {
         top: -8px;
         left: -8px;
      }
   }
`;
