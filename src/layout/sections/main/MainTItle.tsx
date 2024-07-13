import { S } from './Main_styles';

export const MainTitle = () => {
   return (
      <S.MainTItle>
         <svg
            preserveAspectRatio='xMidYMid meet'
            // height='200'
            // width='656'
            viewBox='0 0 656 200'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
               d='M-40 20 C 150 150,  330 330,  655 -10'
               fill='transparent'
               id='my_path1'
            />
            <text
               x='10'
               dx='50'
               y='30'
               fill='#0D0F16'>
               <textPath href='#my_path1'>
                  {' '}
                  <S.BorderSpan
                     fill='transparent'
                     stroke='#0D0F16'>
                     UI
                  </S.BorderSpan>
                  <tspan>/</tspan>
                  <S.BorderSpan
                     fill='transparent'
                     stroke='#0D0F16'>
                     UX{' '}
                  </S.BorderSpan>
                  <S.BoldSpan>D</S.BoldSpan>
                  <tspan>esi</tspan>
                  <S.BoldSpan>g</S.BoldSpan>
                  <tspan>ne</tspan>
                  <S.BoldSpan>r</S.BoldSpan>
                  <tspan> based in UK</tspan>
               </textPath>{' '}
            </text>
         </svg>
      </S.MainTItle>
   );
};
