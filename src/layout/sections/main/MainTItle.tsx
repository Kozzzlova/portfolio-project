import { S } from './Main_styles';

export const MainTitle = () => {
   return (
      <S.MainTItle>
         <svg viewBox='0 0 1000 1000'>
            <circle
               cx='500'
               cy='500'
               r='300'
               fill='none'
            />

            <path
               id='textPath'
               d='M 500 500 m -300, 0 a 300,300 0 1,1 600,0 a 300,300 0 1,1 -600,0'
               fill='none'
            />

            <text
               x='50'
               dx='250'
               y='150'
               fill='#0D0F16'>
               <textPath href='#textPath'>
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

// export const MainTitle = () => {
//    return (
//       <S.MainTItle>
//          <svg
//             preserveAspectRatio='xMidYMid meet'
//             // height='200'
//             // width='656'
//             viewBox='0 0 656 200'
//             fill='none'
//             xmlns='http://www.w3.org/2000/svg'>
//             <path
//                d='M-40 20 C 150 150,  330 330,  655 -10'
//                fill='transparent'
//                id='my_path1'
//             />
//             <text
//                x='10'
//                dx='50'
//                y='30'
//                fill='#0D0F16'>
//                <textPath href='#my_path1'>
//                   {' '}
//                   <S.BorderSpan
//                      fill='transparent'
//                      stroke='#0D0F16'>
//                      UI
//                   </S.BorderSpan>
//                   <tspan>/</tspan>
//                   <S.BorderSpan
//                      fill='transparent'
//                      stroke='#0D0F16'>
//                      UX{' '}
//                   </S.BorderSpan>
//                   <S.BoldSpan>D</S.BoldSpan>
//                   <tspan>esi</tspan>
//                   <S.BoldSpan>g</S.BoldSpan>
//                   <tspan>ne</tspan>
//                   <S.BoldSpan>r</S.BoldSpan>
//                   <tspan> based in UK</tspan>
//                </textPath>{' '}
//             </text>
//          </svg>
//       </S.MainTItle>
//    );
// };
