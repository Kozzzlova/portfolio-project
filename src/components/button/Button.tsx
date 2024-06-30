import styled from 'styled-components';
import { Theme } from '../../styles/Theme';
import { css } from 'styled-components';

type StyledBtnPropsType = {
   btnType: 'primary' | 'outlined';
};

export const StyledButton = styled.button<StyledBtnPropsType>`
   font-family: Epilogue, sans-serif;
   cursor: pointer;
   font-size: 16px;
   line-height: 24px;

   ${(props) =>
      props.btnType === 'primary' &&
      css<StyledBtnPropsType>`
         color: ${Theme.colors.lightMain};
         padding: 8px 20px;
         background-color: ${Theme.colors.primary};

         &:hover {
            background-color: ${Theme.colors.secondary};
         }
      `}

   ${(props) =>
      props.btnType === 'outlined' &&
      css<StyledBtnPropsType>`
         color: ${Theme.colors.darkMain};
         padding: 12px 24px;
         background-color: ${Theme.colors.lightMain};
         border: 1px solid;

         &:hover {
            outline: 2px solid;
            outline-offset: -2px;
         }
      `}
`;
