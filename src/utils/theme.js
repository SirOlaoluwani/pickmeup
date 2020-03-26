import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
    blue: '#4449cc',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '16px',
    medium: '32px',
    large: '48px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const ThemeContext = React.createContext(
  theme, // default value
);

export default Theme;
