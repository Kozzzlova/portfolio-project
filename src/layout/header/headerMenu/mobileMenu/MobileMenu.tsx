import React from 'react';
import styled, { css } from 'styled-components';
import { Menu } from '../../../../components/menu/Menu';
import { StyledButton } from '../../../../components/button/Button';
import { SocialList } from '../../../../components/socialList/SocialList';
import { S } from '../HeaderMenu_Styles';

// const items = ['Projects', 'About', 'Digital Assets'];

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   return (
      <S.MobileMenu isOpen={false}>
         <Menu
            isHidden={true}
            isOpen={false}
            menuItems={props.menuItems}
         />
         <StyledButton
            isOpen={false}
            href='#'
            as={'a'}
            btnType='link'>
            Let's talk
         </StyledButton>
         <S.BurgerButton isOpen={false}>
            <span>
               <span></span>
            </span>
         </S.BurgerButton>
         <SocialList isOpen={false} />
      </S.MobileMenu>
   );
};
