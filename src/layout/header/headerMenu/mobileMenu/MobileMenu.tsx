import React, { useState } from 'react';
import { Menu } from '../../../../components/menu/Menu';
import { StyledButton } from '../../../../components/button/Button';
import { SocialList } from '../../../../components/socialList/SocialList';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   const [menuIsOpen, setmenuIsOpen] = useState(false);
   const onBurgerBtnClick = () => {
      setmenuIsOpen(!menuIsOpen);
   };

   return (
      <S.MobileMenu isOpen={menuIsOpen}>
         <Menu
            isHidden={true}
            isOpen={menuIsOpen}
            menuItems={props.menuItems}
         />
         <StyledButton
            isOpen={menuIsOpen}
            href='#'
            as={'a'}
            btnType='link'>
            Let's talk
         </StyledButton>
         <S.BurgerButton
            isOpen={menuIsOpen}
            onClick={onBurgerBtnClick}>
            <span>
               <span></span>
            </span>
         </S.BurgerButton>
         <SocialList isOpen={menuIsOpen} />
      </S.MobileMenu>
   );
};
