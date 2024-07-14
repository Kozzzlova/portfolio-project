import React from 'react';
import { List } from './List';
import { S } from './Menu_styles';

type MenuPropsType = {
   isOpen: boolean;

   isHidden: boolean;
};

const items = [
   {
      title: 'Skills',
      href: 'skills',
   },
   {
      title: 'Projects',
      href: 'projects',
   },
   {
      title: 'About',
      href: 'about',
   },
   {
      title: 'Contact',
      href: 'contact',
   },
];

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
   return (
      <List
         isHidden={props.isHidden}
         isOpen={props.isOpen}>
         {items.map((item, index) => {
            return (
               <S.ListItem
                  role='menuitem'
                  key={index}>
                  <S.NavLink
                     smooth={true}
                     to={item.href}>
                     {item.title}
                  </S.NavLink>
               </S.ListItem>
            );
         })}
      </List>
   );
};
