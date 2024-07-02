import React from 'react';
import styled from 'styled-components';

type LetterPropsType = {
   item: string;
};
type StyledLetterPropsType = {
   rotate: string;
};

export const Letter = (props: LetterPropsType) => {
   return <StyledLetter>{props.item}</StyledLetter>;
};

const StyledLetter = styled.span`
   height: 200px;
   display: inline-block;
   transform-origin: center top;
   display: inline-block;
   width: 25px;
   position: absolute;
   transform-origin: top center;
`;
