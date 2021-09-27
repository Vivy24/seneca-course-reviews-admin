// components/GlobalStyles.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  html, body{
    ${tw`h-full`}
  }
  
  body {
    ${tw`antialiased`}
  }

  #__next {
    ${tw`min-h-full flex flex-col`}
  }
`;

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);
