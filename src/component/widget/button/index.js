import React, { useContext} from 'react';

import {ThemeContext} from 'src/utils/theme';
import {ButtonView, ButtonText, OutlineButton} from './styles';

const Button = props => {
  // const theme = useContext(ThemeContext);
  return <ButtonView {...props} />;
};

const OutlineButtonView = props => {
  return <OutlineButton {...props} />;
};

const ButtonTextView = props => {
  return <ButtonText {...props} />;
};

export {Button, ButtonTextView, OutlineButtonView};
