import React from 'react';
import { List } from './List';
import { S } from './Menu_styles';

type MenuPropsType = {
   isOpen: boolean;
   menuItems: Array<string>;
   isHidden: boolean;
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
   return (
      <List
         isHidden={props.isHidden}
         isOpen={props.isOpen}>
         {props.menuItems.map((item: string, index: number) => {
            return (
               <S.ListItem
                  role='menuitem'
                  key={index}>
                  <S.Link href='#'>{item}</S.Link>
               </S.ListItem>
            );
         })}
      </List>
   );
};
