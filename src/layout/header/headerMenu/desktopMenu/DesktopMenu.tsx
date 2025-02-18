import React from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { StyledButton } from '../../../../components/button/Button';
import { S } from '../HeaderMenu_Styles';

export const DesktopMenu: React.FC = () => {
   return (
      <S.DesktopMenu>
         <Menu
            isHidden={false}
            isOpen={false}
         />
         <StyledButton
            href='#'
            as={'a'}
            btnType='link'>
            Let's talk
         </StyledButton>
      </S.DesktopMenu>
   );
};
