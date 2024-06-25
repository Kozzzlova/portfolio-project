import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import logo from '../../assets/images/logo.png';

export const Logo = () => {
   return (
      <div>
         <a href=''>
            {/* <Icon iconId={'facebookSvg'} /> */}
            <Image
               width='59px'
               height='49px'
               src={logo}></Image>
         </a>
      </div>
   );
};

const Image = styled.img`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
`;
