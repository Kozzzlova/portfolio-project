import { ReactNode } from 'react';
import { S } from './Menu_styles';

type ListProps = {
   children: ReactNode;
   isOpen: boolean;
   isHidden: boolean;
};

export const List = ({ children, isOpen, isHidden }: ListProps) => {
   return (
      <S.Menu
         isHidden={isHidden}
         isOpen={isOpen}>
         {children}
      </S.Menu>
   );
};
