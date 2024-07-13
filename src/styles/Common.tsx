type FontPropsType = {
   family?: string;
   weight?: number;
   lineHeight?: number;
   Fmin?: number;
   Fmax?: number;
};

export const font = ({
   family,
   weight,
   lineHeight,
   Fmin,
   Fmax,
}: FontPropsType) => `
font-family: ${family || 'Epilogue'};
font-weight: ${weight || 400};
line-height: ${lineHeight || 1.2};
font-size: clamp(${Fmin}px, calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px, );
`;
