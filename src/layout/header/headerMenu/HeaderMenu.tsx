import React from 'react';
import styled from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { Theme } from '../../../styles/Theme';
import { StyledButton } from '../../../components/button/Button';

const items = ['Projects', 'About', 'Digital Assets'];

export const HeaderMenu = () => {
   return (
      <StyledHeaderMenu>
         <Menu menuItems={items} />
         <StyledButton
            href='#'
            as={'a'}
            btnType='link'>
            Let's talk
         </StyledButton>
      </StyledHeaderMenu>
   );
};

const StyledHeaderMenu = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 32px;

   @media ${Theme.media.tablet} {
      display: none;
   }
`;
