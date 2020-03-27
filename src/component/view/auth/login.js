import React from 'react';

import FacebookIcon from 'src/assets/icons/facebook-icon.svg';
import GoogleIcon from 'src/assets/icons/google-icon.svg';
import {SpacerW, SpacerH} from 'component/widget/spacing';
import {
  TextView,
  LoginContainer,
  FormContainer,
  SocialLoginContainer,
  FacebookButton,
  GoogleButton,
  GoogleButtonTextContainer,
  GoogleButtonText,
  ButtonText,
  LogoImageContainer,
  LogoImage,
  LogoText,
  GreetingText,
  PhoneInputView,
  BottomFormContainerText,
} from './styles';



const login = (props) => {
  const handleChangePhoneNumber = number => {
    console.log('Phone number changed', number);
  };

  return (
    <LoginContainer>
      <FormContainer>
        <LogoImageContainer>
          <LogoImage source={require('src/assets/logo/logo.png')} />
          <SpacerW width={10} />
          <LogoText>Pickmeup</LogoText>
        </LogoImageContainer>
        <SpacerH height={50} />

        <GreetingText size={'20px'}>Hey There!</GreetingText>
        <SpacerH width={10} />

        <TextView size={'20px'}>
          Type in your phone number to get started
        </TextView>
        <SpacerH height={50} />

        <PhoneInputView onChangePhoneNumber={handleChangePhoneNumber} />

        <BottomFormContainerText size={'15px'}>
          Or you can sign in with:
        </BottomFormContainerText>
      </FormContainer>

      <SocialLoginContainer>
        <FacebookButton>
          <FacebookIcon height={15} width={15} />
          <SpacerW width={10} />
          <ButtonText>Facebook</ButtonText>
        </FacebookButton>
        <SpacerW />

        <GoogleButton>
          <GoogleIcon height={15} width={15} />
          <SpacerW width={10} />
          <GoogleButtonTextContainer>
            <GoogleButtonText>Google</GoogleButtonText>
          </GoogleButtonTextContainer>
        </GoogleButton>
      </SocialLoginContainer>
    </LoginContainer>
  );
};

export default login;
