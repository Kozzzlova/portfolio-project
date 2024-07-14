import React from 'react';
import { Container } from '../../../components/Container';
import { ContactWrapper } from './contactWrapper/ContactWrapper';
import { S } from './Contact_styles';

const items = ['Projects', 'About', 'Digital Assets'];

export const Contact: React.FC = () => {
   return (
      <S.Contact id='contact'>
         <Container>
            <ContactWrapper />
         </Container>
      </S.Contact>
   );
};
