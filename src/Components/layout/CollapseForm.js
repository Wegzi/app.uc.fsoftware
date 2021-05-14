import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from '../Collapse';
import { Button } from '../Button';

export function OverflowCollapse({ isOpen, children }) {
  return (
    <>
      <Container isOpen={isOpen}>
        <Collapse isOpen={isOpen}>
          <div className='p-3 pb-5 rounded-t-xl' style={{ height: '100vh' }}>
            {children}
          </div>
        </Collapse>
      </Container>
    </>
  );
}
export default function CollapseForm({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className={`p-3 pb-5 rounded-t-xl`} isOpen={isOpen}>
      {isOpen ? null : (
        <Button
          className='ml-auto mb-3'
          text={isOpen ? 'CLOSE' : 'ADD'}
          icon={isOpen ? 'FiX' : 'FiPlus'}
          onClick={() => setIsOpen(true)}
        />
      )}
      <Collapse isOpen={isOpen}>
        <div style={{ height: '87vh' }}>{children}</div>
        <div className='flex w-100 justify-center'>
          <Button text='SUBMIT' className='mr-3' icon='FiCheck' />
          <Button text='CANCEL' icon='FiX' onClick={() => setIsOpen(false)} />
        </div>
      </Collapse>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: ${({ isOpen, theme }) =>
    isOpen ? theme.ultralight + 'f5' : 'transparent'};
  transition: background-color 500ms;
  width: 100%;
`;

export const Section = styled.div`
  box-shadow: ${props => props.theme.shadowsm};
  border-radius: ${props => props.theme.rounded};
  background-color: ${props => props.theme.light};
  padding: 1rem;
  height: 55vh;
  overflow-y: auto;
`;
