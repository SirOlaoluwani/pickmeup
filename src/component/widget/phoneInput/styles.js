import styled from 'styled-components/native';

import Text from 'component/widget/text';

export const  TextInputView = styled.TextInput`
  width: 60%;
  height: 100%;
  padding: 10px;
`;

export const PhoneInputContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  flex-direction: row;
`;

export const AreaCodeContainer = styled.View`
  flex-direction: row;
  width: 40%;
  padding: 10px;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${props => props.theme.colors.lightBlue}
  height: 100%
`;

export const AreaCodeText = styled(Text)``;
