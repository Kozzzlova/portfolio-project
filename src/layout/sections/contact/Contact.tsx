import React from 'react';
import { Container } from '../../../components/Container';
import { ContactWrapper } from './contactWrapper/ContactWrapper';
import { S } from './Contact_styles';

const items = ['Projects', 'About', 'Digital Assets'];

export const Contact: React.FC = () => {
   return (
      <S.Contact>
         <Container>
            <ContactWrapper menuItems={items} />
         </Container>
      </S.Contact>
   );
};
