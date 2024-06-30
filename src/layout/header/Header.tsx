import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { StyledButton } from '../../components/button/Button';

const items = ['Projects', 'About', 'Digital Assets'];

export const Header = () => {
   return (
      <div>
         <StyledHeader>
            <Container>
               <FlexWrapper
                  justify='space-between'
                  align='center'>
                  <Logo />
                  <FlexWrapper
                     justify='flex-end'
                     align='center'
                     colGap='32px'>
                     <Menu menuItems={items} />
                     <StyledButton btnType='primary'>Let's talk</StyledButton>
                  </FlexWrapper>
               </FlexWrapper>
            </Container>
         </StyledHeader>
      </div>
   );
};

const StyledHeader = styled.header`
   padding: 20px 0;
`;
