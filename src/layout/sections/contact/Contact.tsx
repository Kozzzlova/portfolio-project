import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Logo } from '../../../components/logo/Logo';
import { Menu } from '../../../components/menu/Menu';
import { StyledButton } from '../../../components/button/Button';

const items = ['Projects', 'About', 'Digital Assets'];

type ContactPropsType = {
   gap?: string;
};

export const Contact = () => {
   return (
      <StyledContact>
         <FlexWrapper justify={'space-between'}>
            <ContactColumn gap={'20px'}>
               <Logo></Logo>
               <Menu menuItems={items}></Menu>
            </ContactColumn>
            <ContactColumn gap={'16px'}>
               <ContactTitle>Subscribe to my emailing list</ContactTitle>
               <ContactForm>
                  <ContactField placeholder='Enter your email'></ContactField>
                  <StyledButton type={'submit'}>Subscribe</StyledButton>
               </ContactForm>
               <ContactText>
                  By subscribing you agree to with our Privacy Policy
               </ContactText>
            </ContactColumn>
         </FlexWrapper>
      </StyledContact>
   );
};

const StyledContact = styled.section`
   min-height: 50vh;
   background-color: #dfacdf;
`;
const ContactColumn = styled.div<ContactPropsType>`
   display: flex;
   flex-direction: column;
   gap: ${(props) => props.gap || '0px'};
`;
const ContactTitle = styled.h4``;
const ContactForm = styled.form`
   display: flex;
   gap: 16px;
`;
const ContactField = styled.input.attrs((props) => ({
   placeholder: props.placeholder,
}))`
   max-width: 257px;
`;

const ContactText = styled.span``;
