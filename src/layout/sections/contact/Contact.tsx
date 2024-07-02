import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Logo } from '../../../components/logo/Logo';
import { Menu } from '../../../components/menu/Menu';
import { StyledButton } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import { Theme } from '../../../styles/Theme';

const items = ['Projects', 'About', 'Digital Assets'];

type ContactPropsType = {
   gap?: string;
};

export const Contact = () => {
   return (
      <StyledContact>
         <Container>
            <FlexWrapper justify={'space-between'}>
               <FlexWrapper
                  direction='column'
                  rowGap={'20px'}
                  align='flex-start'>
                  <Logo></Logo>
                  <Menu menuItems={items}></Menu>
               </FlexWrapper>
               <FlexWrapper
                  direction='column'
                  rowGap={'16px'}
                  align='flex-start'>
                  <ContactTitle>Subscribe to my emailing list</ContactTitle>
                  <ContactForm>
                     <ContactField placeholder='Enter your email'></ContactField>
                     <StyledButton
                        btnType='outlined'
                        type={'submit'}>
                        Subscribe
                     </StyledButton>
                  </ContactForm>
                  <ContactText>
                     By subscribing you agree to with our{' '}
                     <a href='#'>Privacy Policy</a>
                  </ContactText>
               </FlexWrapper>
            </FlexWrapper>
         </Container>
      </StyledContact>
   );
};

const StyledContact = styled.section`
   padding-top: 80px;
   padding-bottom: 64px;
   position: relative;

   &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 1280px;
      height: 1px;
      background-color: ${Theme.colors.darkMain};
   }
`;

const ContactTitle = styled.h4`
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
`;
const ContactForm = styled.form`
   display: flex;
   gap: 16px;
`;
const ContactField = styled.input.attrs((props) => ({
   placeholder: props.placeholder,
}))`
   max-width: 257px;
   width: 100%;
   padding: 11px;
   color: ${Theme.colors.darkMain};
   border: 1px solid;
   font-family: Epilogue;
   font-size: 16px;
   line-height: 1.5;
   &:hover {
      outline: 2px solid;
      outline-offset: -2px;
   }
   &::placeholder {
      color: ${Theme.colors.primary};
   }
`;

const ContactText = styled.p`
   font-family: Roboto;
   font-size: 12px;
   line-height: 18px;

   a {
      text-decoration: underline;
   }
`;
