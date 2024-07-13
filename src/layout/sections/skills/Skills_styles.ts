import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../styles/Theme';

//Skills

const Skills = styled.section`
   background-color: black;
   padding: 102px 52px 144px;
   display: flex;
   align-items: center;
   justify-content: center;
   @media ${Theme.media.pc} {
      padding: 60px 40px;
   }
   @media ${Theme.media.tablet} {
      padding: 42px 30px;
   }
`;

const SkillsWrapper = styled.ol`
   display: grid;
   grid-template-columns: repeat(3, 1fr);

   row-gap: 64px;
   column-gap: 8px;
   list-style: none;
   counter-reset: example 0;

   @media ${Theme.media.pc} {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 50px;
   }
   @media ${Theme.media.tablet} {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 40px;
   }
`;

//Skill

const Skill = styled.li`
   color: ${Theme.colors.lightMain};
   display: flex;
   flex-direction: column;
   gap: 5px;
   padding-left: 123px;
   position: relative;
   counter-increment: example 1;
   @media ${Theme.media.pc} {
      padding-left: 95px;
   }
   @media ${Theme.media.tablet} {
      gap: 3px;
      padding-left: 78px;
   }

   &::after {
      content: '0' counter(example) '.';
      display: inline-block;
      font-size: 70px;
      font-weight: 100;
      line-height: 1;
      position: absolute;
      top: 17px;
      left: 8px;
      @media ${Theme.media.pc} {
         font-size: 60px;
      }
      @media ${Theme.media.tablet} {
         font-size: 45px;
         top: 12px;
      }
   }
`;

const SkillTitle = styled.h2`
   font-size: 30px;
   font-weight: 300;
   line-height: 1;

   @media ${Theme.media.tablet} {
      font-size: 23px;
   }
`;
const SkillDescription = styled.p`
   font-size: 18px;
   font-weight: 200;
   @media ${Theme.media.pc} {
      font-size: 16px;
   }
   @media ${Theme.media.tablet} {
      font-size: 14px;
   }
`;

export const S = {
   Skills,
   SkillsWrapper,
   Skill,
   SkillTitle,
   SkillDescription,
};
