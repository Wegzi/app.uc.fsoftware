import Color from 'color';
import styled from 'styled-components';
import { Icon, Label } from '../../Components/Typography';

export function ListItem({ label, onClick, icon, children }) {
  return (
    <StyledListItem>
      <div className='p-3 flex justify-between' onClick={onClick}>
        <Label text={label} semiBold />
        {icon ? <Icon icon={icon} /> : null}
      </div>
      {children}
    </StyledListItem>
  );
}
const StyledListItem = styled.div`
  background-color: ${({ theme }) => theme.white};
  line-height: 1.2;
  font-weight: 600;
  cursor: pointer;
  border-top: solid 1px ${({ theme }) => theme.light};
  &:first-child {
    border-top: none;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: ${({ theme }) => Color(theme.white).darken(0.05).hex()};
  }
`;
