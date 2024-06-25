import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

const items = ['Projects', 'About', 'Digital Assets', 'Let`s talk'];

export const Header = () => {
   return (
      <div>
         <StyledHeader>
            <Logo />
            <Menu menuItems={items} />
         </StyledHeader>
      </div>
   );
};

const StyledHeader = styled.header`
   background-color: pink;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
