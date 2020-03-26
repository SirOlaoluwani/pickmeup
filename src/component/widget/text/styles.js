import styled from 'styled-components/native';


export const TextView = styled.Text`
  font-size: ${props => props.size ?? props.theme.fontSizes.small};
`;
