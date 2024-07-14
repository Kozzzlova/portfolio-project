import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { Theme } from '../../styles/Theme';
import { animateScroll as scroll } from 'react-scroll';

export const GoToTop = () => {
   const [showButton, setshowButton] = useState(false);
   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 200) {
            setshowButton(true);
         } else {
            setshowButton(false);
         }
      });
   }, []);
   return (
      <>
         {showButton && (
            <StyledGoToTop
               onClick={() => {
                  scroll.scrollToTop();
               }}>
               <Icon
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  iconId='goToTopSvg'
               />
            </StyledGoToTop>
         )}
      </>
   );
};

const StyledGoToTop = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 48px;
   height: 48px;
   background-color: rgba(0, 0, 0, 0.5);
   border-radius: 50%;
   position: fixed;
   bottom: 85px;
   right: 10px;
   border: 2px solid white;
   z-index: 5;
   transition: ${Theme.animations.transition};

   &:hover {
      background-color: rgba(0, 0, 0, 1);
   }
`;
