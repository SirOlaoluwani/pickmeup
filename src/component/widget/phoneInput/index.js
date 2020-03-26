import React from 'react';

import NigeriaFlag from 'src/assets/icons/nigeria.svg';
import {SpacerW, SpacerH} from 'component/widget/spacing';

import {
  PhoneInputContainer,
  AreaCodeContainer,
  AreaCodeText,
  TextInputView,
} from './styles';


const PhoneInput = props => {
  return (
    <PhoneInputContainer>
      <AreaCodeContainer>
        <NigeriaFlag width={30} height={30} />
        <SpacerW width={10} />
        <AreaCodeText>+234</AreaCodeText>
      </AreaCodeContainer>
      <TextInputView keyboardType="phone-pad" placeholder="08168437615"/>
    </PhoneInputContainer>
  );
};

export default PhoneInput;
