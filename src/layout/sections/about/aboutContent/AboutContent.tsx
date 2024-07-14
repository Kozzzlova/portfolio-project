import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import photoImg from '../../../../assets/images/photo.png';
import photo2x from '../../../../assets/images/photo@2x.png';
import { S } from '../About_styles';
import Tilt from 'react-parallax-tilt';

export const AboutContent: React.FC = () => {
   return (
      <S.AboutContent
         justify='space-between'
         colGap='63px'>
         {' '}
         <FlexWrapper
            width='532px'
            direction='column'
            shrink='1'>
            <S.AboutTitle>About me</S.AboutTitle>
            <S.AboutSlogan>
               I look at unusual things with my unsual eyes.
            </S.AboutSlogan>
            <Tilt
               glareEnable={true}
               glareMaxOpacity={0.8}
               glareColor='#0a0202'
               glarePosition='bottom'
               glareBorderRadius='0px'>
               <S.ImageLeft
                  src={photoImg}
                  srcSet={`${photo2x} 2x`}
                  alt='my photo'></S.ImageLeft>
            </Tilt>
         </FlexWrapper>
         <FlexWrapper
            width='440px'
            direction='column'
            shrink='1'>
            <S.AboutText>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  varius faucibus massa sollicitudin amet augue. Nibh metus a
                  semper purus mauris duis. Lorem eu neque, tristique quis duis.
                  Nibh scelerisque ac adipiscing velit non nulla in amet
                  pellentesque.
               </p>
               <p>
                  Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                  consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                  lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec,
                  habitasse vulputate. Eget dictum quis est sed egestas tellus,
                  a lectus. Quam ullamcorper in fringilla arcu aliquet fames
                  arcu.Lacinia eget faucibus urna, nam risus nec elementum cras
                  porta.{' '}
               </p>
               <p>
                  Sed elementum, sed dolor purus dolor dui. Ut dictum nulla
                  pulvinar vulputate sit sagittis in eleifend dignissim. Natoque
                  mauris cras molestie velit. Maecenas eget adipiscing quisque
                  viverra lectus arcu, tincidunt ultrices pellentesque.
               </p>
            </S.AboutText>

            <S.ImageRight
               src={photoImg}
               srcSet={`${photo2x} 2x`}
               alt='my photo'></S.ImageRight>
         </FlexWrapper>
      </S.AboutContent>
   );
};
