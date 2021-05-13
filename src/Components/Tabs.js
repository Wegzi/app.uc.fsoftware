import styled from 'styled-components';

export function TabContainer({ children, ...props }) {
  return (
    <div {...props}>
      <ul className='flex cursor-pointer'>{children}</ul>
    </div>
  );
}

export function Tabs({ title, active, ...props }) {
  return (
    <StyledTabs className='py-2 px-6 rounded-t-lg' active={active} {...props}>
      {title}
    </StyledTabs>
  );
}

export function TabContent({ className, children, ...props }) {
  return (
    <StyledTabContent className={className ? className : 'p-3'} {...props}>
      {children}
    </StyledTabContent>
  );
}

const StyledTabContent = styled.div`
  background-color: ${({ theme, ...props }) => theme.light};
`;
const StyledTabs = styled.li`
  border-top: solid 1px
    ${({ theme, ...props }) => (props.active ? theme.light : 'transparent')};
  border-right: solid 1px
    ${({ theme, ...props }) => (props.active ? theme.light : 'transparent')};
  border-left: solid 1px
    ${({ theme, ...props }) => (props.active ? theme.light : 'transparent')};
  background-color: ${({ theme, ...props }) =>
    props.active ? theme.light : 'transparent'};
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;
