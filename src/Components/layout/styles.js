import Color from 'color';
import styled from 'styled-components';

export const MenuItem = styled.div`
  background-color: ${({ theme }) => theme.ultralight};
  line-height: 1.2;
  margin-bottom: 8px;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.text.dark};
  font-style: normal;
  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.ultralight).darken(0.05).hex()};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;
