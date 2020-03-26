import React from 'react';

import {SpacerW as SpacerWView, SpacerH as SpacerHView} from './styles';

const SpacerW = props => {
  return <SpacerWView {...props} />;
};

const SpacerH = props => {
  return <SpacerHView {...props} />;
};

export {
  SpacerW,
  SpacerH,
};
