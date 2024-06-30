import styled from 'styled-components';

type SectionTitlePropsType = {
   maxWidth: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
   font-size: 150px;
   font-weight: 800;
   text-align: left;
   width: 100%;
   text-transform: uppercase;
   max-width: ${(props) => props.maxWidth};
`;
