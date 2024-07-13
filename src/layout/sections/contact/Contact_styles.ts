import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';
import { FlexWrapper } from '../../../components/FlexWrapper';

const Contact = styled.section`
   padding-top: 80px;
   padding-bottom: 64px;
   position: relative;

   @media ${Theme.media.tablet} {
      padding: 24px 0 32px;
   }

   &::after {
      position: absolute;
      content: '';
      display: block;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 1280px;
      height: 1px;
      background-color: ${Theme.colors.darkMain};
      @media ${Theme.media.tablet} {
         width: 95%;
      }
   }
`;

const ContactWrapper = styled(FlexWrapper)`
   @media ${Theme.media.tablet} {
      flex-direction: column;
      row-gap: 26px;
   }
`;

const ContactTitle = styled.h4`
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
`;
const ContactForm = styled.form`
   display: flex;
   gap: 16px;
   @media ${Theme.media.tablet} {
      width: 100%;
   }
   @media ${Theme.media.mobile} {
      flex-direction: column;
   }
`;
const ContactField = styled.input.attrs((props) => ({
   placeholder: props.placeholder,
}))`
   max-width: 257px;
   width: 100%;
   padding: 11px;
   color: ${Theme.colors.darkMain};
   border: 1px solid;
   font-family: Epilogue, sans-serif;
   font-size: 16px;
   line-height: 1.5;

   @media ${Theme.media.tablet} {
      width: 100%;
      max-width: 100%;
   }
   &:hover {
      outline: 2px solid;
      outline-offset: -2px;
   }
   &::placeholder {
      color: ${Theme.colors.primary};
   }
`;

const ContactText = styled.p`
   font-family: Roboto;
   font-size: 12px;
   line-height: 18px;

   a {
      text-decoration: underline;
   }
`;

export const S = {
   Contact,
   ContactWrapper,
   ContactTitle,
   ContactForm,
   ContactField,
   ContactText,
};
