import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Logo } from '../../../../components/logo/Logo';
import { Menu } from '../../../../components/menu/Menu';
import { StyledButton } from '../../../../components/button/Button';
import { S } from '../Contact_styles';
import Typewriter from 'typewriter-effect';

export const ContactWrapper: React.FC<{ menuItems: Array<string> }> = (props: {
   menuItems: Array<string>;
}) => {
   return (
      <S.ContactWrapper justify={'space-between'}>
         <FlexWrapper
            direction='column'
            rowGap={'20px'}
            align='flex-start'>
            <Logo></Logo>
            <Menu
               isHidden={false}
               isOpen={false}
               menuItems={props.menuItems}></Menu>
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
            <S.ContactForm>
               <S.ContactField placeholder='Enter your email'></S.ContactField>
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
