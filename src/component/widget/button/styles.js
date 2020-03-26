import styled from 'styled-components/native';

import Text from 'component/widget/text';

export const ButtonView = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  elevation: 0;
`;

export const OutlineButton = styled(ButtonView)`
  border: 1px solid ${props => props.theme.colors.blue};
`;

export const ButtonText = styled(Text)``;
