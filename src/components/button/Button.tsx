import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

export const StyledButton = styled.button`
   font-family: Epilogue, sans-serif;
   cursor: pointer;
   font-size: 16px;
   line-height: 24px;
   color: ${Theme.colors.lightMain};
   padding: 8px 20px;
   background-color: ${Theme.colors.primary};
`;
