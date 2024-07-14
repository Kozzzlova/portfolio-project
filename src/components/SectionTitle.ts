import styled from 'styled-components';
import { Theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
   font-size: clamp(
      60px,
      calc((100vw - 375px) / (1440 - 375) * (150 - 60) + 60px),
      150px
   );
   max-width: clamp(
      60px,
      calc((100vw - 375px) / (1440 - 375) * (775 - 320) + 320px),
      775px
   );
   font-weight: 800;
   text-align: left;
   width: 100%;
   text-transform: uppercase;
   color: ${Theme.colors.primary};
`;
