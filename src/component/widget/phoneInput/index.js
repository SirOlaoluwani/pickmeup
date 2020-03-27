import React, {useState, useEffect, useRef} from 'react';
// import PhoneInputView from 'react-native-phone-input';

import NigeriaFlag from 'src/assets/icons/nigeria.svg';
import {SpacerW, SpacerH} from 'component/widget/spacing';

import {
  PhoneInputContainer,
  AreaCodeContainer,
  AreaCodeText,
  TextInputView,
  PhoneInputView,
  TextInputContainer,
} from './styles';

const PhoneInput = props => {
  const phoneRef = useRef(null);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    setCountryCode(phoneRef.current.getCountryCode());
  }, []);

  const handleSelectedCountry = iso2 => {
    setCountryCode(iso2);
  };

  const handleNumberChange = number => {
    props.onChangeText(`+${countryCode}${number}`);
  };

  return (
    <PhoneInputContainer>
      <PhoneInputView
        ref={phoneRef}
        onSelectCountry={handleSelectedCountry}
        initialCountry="ng"
        textComponent={() => (
          <TextComponent
            countryCode={countryCode}
            onChangeText={handleNumberChange}
          />
        )}
      />
    </PhoneInputContainer>
  );
};

const TextComponent = ({countryCode, onChangeText}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(() => {
    onChangeText(phoneNumber);
  }, [phoneNumber]);
  return (
    <TextInputContainer>
      <AreaCodeContainer>
        <AreaCodeText>+{countryCode}</AreaCodeText>
      </AreaCodeContainer>
      <TextInputView
        key="phone-input"
        keyboardType="phone-pad"
        placeholder="8168437615"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
      />
    </TextInputContainer>
  );
};
export default PhoneInput;
