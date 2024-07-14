import React, { ElementRef, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Logo } from '../../../../components/logo/Logo';
import { Menu } from '../../../../components/menu/Menu';
import { StyledButton } from '../../../../components/button/Button';
import { S } from '../Contact_styles';
import Typewriter from 'typewriter-effect';

export const ContactWrapper: React.FC = () => {
   const form = useRef<ElementRef<'form'>>(null);

   const sendEmail = (e: any) => {
      e.preventDefault();

      if (!form.current) return;

      emailjs
         .sendForm('service_o8tvnhn', 'template_rgoeve9', form.current, {
            publicKey: 'Y1-vx7nW5s-I0veq2',
         })
         .then(
            () => {
               console.log('SUCCESS!');
            },
            (error) => {
               console.log('FAILED...', error.text);
            }
         );

      e.target.reset();
   };
   return (
      <S.ContactWrapper justify={'space-between'}>
         <FlexWrapper
            direction='column'
            rowGap={'20px'}
            align='flex-start'>
            <Logo></Logo>
            <Menu
               isHidden={false}
               isOpen={false}></Menu>
         </FlexWrapper>
         <FlexWrapper
            direction='column'
            rowGap={'16px'}
            align='flex-start'>
            <S.ContactTitle>
               <p>Subscribe to my emailing list</p>
               <Typewriter
                  options={{
                     strings: ['Subscribe to my emailing list'],
                     autoStart: true,
                     loop: true,
                  }}
               />
            </S.ContactTitle>
            <S.ContactForm
               ref={form}
               onSubmit={sendEmail}>
               <S.ContactField
                  required
                  name='user_email'
                  placeholder='Enter your email'></S.ContactField>
               <StyledButton
                  btnType='outlined'
                  type={'submit'}>
                  Subscribe
               </StyledButton>
            </S.ContactForm>
            <S.ContactText>
               By subscribing you agree to with our{' '}
               <a href='#'>Privacy Policy</a>
            </S.ContactText>
         </FlexWrapper>
      </S.ContactWrapper>
   );
};
