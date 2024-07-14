import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import logo2x from '../../assets/images/logo@2x.png';
import { animateScroll as scroll } from 'react-scroll';

export const Logo: React.FC = () => {
   return (
      <LogoLink
         onClick={() => {
            scroll.scrollToTop();
         }}>
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
   cursor: pointer;
`;

const Image = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
`;
