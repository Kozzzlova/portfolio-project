import styled from 'styled-components';
import { Theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const SectionTitle: React.FC = styled.h2`
   font-size: clamp(
      60px,
      calc((100vw - 375px) / (1440 - 375) * (150 - 60) + 60px),
      150px
   );
   font-weight: 800;
   text-align: left;
   width: 100%;
   text-transform: uppercase;
   color: ${Theme.colors.primary};
`;
