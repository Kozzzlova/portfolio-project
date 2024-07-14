import styled from 'styled-components';
import { Theme } from '../../styles/Theme';
import { css } from 'styled-components';

type StyledBtnPropsType = {
   btnType: 'link' | 'outlined';
   isOpen?: boolean;
};

export const StyledButton = styled.button<StyledBtnPropsType>`
   font-family: Epilogue, sans-serif;
   cursor: pointer;
   font-size: 16px;
   line-height: 1.5;
   transition: ${Theme.animations.transition};

   ${(props) =>
      props.btnType === 'link' &&
      css<StyledBtnPropsType>`
         color: ${Theme.colors.lightMain};
         padding: 8px 20px;
         background-color: ${Theme.colors.primary};
         text-transform: capitalize;
         display: inline-block;

         &:hover {
            background-color: ${Theme.colors.secondary};
         }
      `}

   ${(props) =>
      props.btnType === 'outlined' &&
      css<StyledBtnPropsType>`
         color: ${Theme.colors.darkMain};
         padding: 11px 23px;
         background-color: ${Theme.colors.lightMain};
         border: 1px solid;
         outline: 2px solid transparent;
         outline-offset: -2px;

         &:hover {
            outline-color: ${Theme.colors.darkMain};
         }
      `}

       ${(props) =>
      props.isOpen === true &&
      css<StyledBtnPropsType>`
         display: none;
      `}
`;
