import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import logo from '../../assets/images/logo.png';

export const Logo = () => {
   return (
      <LogoLink href='#'>
         {/* <Icon iconId={'facebookSvg'} /> */}
         <Image
            width='59px'
            height='49px'
            src={logo}></Image>
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
