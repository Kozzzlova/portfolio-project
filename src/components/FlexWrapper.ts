import styled from 'styled-components';

type FlexWrapperPropsType = {
   direction?: string;
   justify?: string;
   align?: string;
   wrap?: string;
   gap?: string;
   rowGap?: string;
   colGap?: string;
   width?: string;
   grow?: string;
   shrink?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
   display: flex;
   flex-direction: ${(props) => props.direction || 'row'};
   justify-content: ${(props) => props.justify || 'flex-start'};
   align-items: ${(props) => props.align || 'stretch'};
   flex-wrap: ${(props) => props.wrap || 'no-wrap'};
   gap: ${(props) => props.gap || '0px'};
   row-gap: ${(props) => props.rowGap || '0px'};
   column-gap: ${(props) => props.colGap || '0px'};
   width: ${(props) => props.width || 'auto'};
   flex-grow: ${(props) => props.grow || '0'};
   flex-shrink: ${(props) => props.shrink || '0'};
`;
