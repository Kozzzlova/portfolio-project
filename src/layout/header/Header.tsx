import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { StyledButton } from '../../components/button/Button';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobileMenu/MobileMenu';

const items = ['Projects', 'About', 'Digital Assets'];

export const Header = () => {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper
               justify='space-between'
               align='center'>
               <Logo />
               <HeaderMenu />
               <MobileMenu />
            </FlexWrapper>
         </Container>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   padding: 20px 0;
`;

const StyledNav = styled.nav`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 32px;
`;
