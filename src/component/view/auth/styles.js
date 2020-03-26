import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Text from 'component/widget/text';
import PhoneInput from 'component/widget/phoneInput';
import {
  ButtonTextView,
  OutlineButtonView,
} from 'component/widget/button';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('screen');

export const TextView = styled(Text)`
  color: white;
`;

export const LoginContainer = styled.ScrollView`
  height: ${SCREEN_HEIGHT}px;
`;

export const FormContainer = styled.View`
  background-color: ${props => props.theme.colors.blue};
  height: ${SCREEN_HEIGHT / 1.3}px;
  padding: 40px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const BottomFormContainerText = styled(TextView)`
  position: absolute;
  bottom: 10px;
  width: ${SCREEN_WIDTH}px;
  text-align: center;
`;

export const SocialLoginContainer = styled.View`
  top: 10px;
  bottom: 20px;
  padding: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SocialLoginButton = styled(OutlineButtonView)`
  flex-direction: row;
  width: 120px;
  align-items: center;
`;

export const FacebookButton = styled(SocialLoginButton)`
  justify-content: space-between;
`;

export const GoogleButton = styled(SocialLoginButton)`
  padding: 0;
  padding-left: 10px;
`;

export const GoogleButtonTextContainer = styled.View`
  background: ${props => props.theme.colors.blue},
  padding: 10px;
  width: 78%;
  border-radius: 8px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(ButtonTextView)`
  color: ${props => props.theme.colors.onyx};
`;

export const GoogleButtonText = styled(ButtonText)`
  color: white;
`;

export const LogoImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const LogoText = styled(TextView)`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const GreetingText = styled(TextView)`
  font-weight: 700;
`;

export const PhoneInputView = styled(PhoneInput)``;
