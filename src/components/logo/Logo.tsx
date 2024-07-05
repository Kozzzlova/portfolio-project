import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import logo from '../../assets/images/logo.png';
import logo2x from '../../assets/images/logo@2x.png';

export const Logo = () => {
   return (
      <LogoLink href='#'>
         {/* <Icon iconId={'facebookSvg'} /> */}
         <Image
            width='59px'
            height='49px'
            src={logo}
            alt='Logo'
            srcSet={`${logo2x} 2x`}></Image>
      </LogoLink>
   );
};

const LogoLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Image = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
`;
