import React from 'react';
import styled from 'styled-components';
import Collapse from '../Collapse';
import { Button } from '../Button';

export function OverflowCollapse({ isOpen, children }) {
  return (
    <>
      <Container className={`p-3 pb-5 rounded-t-xl`} isOpen={isOpen}>
        <Collapse isOpen={isOpen}>
          <div style={{ height: '92vh' }}>{children}</div>
        </Collapse>
      </Container>
    </>
  );
}
export default function CollapseForm({
  children,
  isOpen,
  setIsOpen,
  onSubmit,
  overlayButtonLabel,
  overlayButtonIcon,
  onClose,
}) {
  return (
    <Container className={`p-3 pb-5 rounded-t-xl`} isOpen={isOpen}>
      {isOpen ? null : (
        <Button
          className='ml-auto mb-3'
          text={overlayButtonLabel ? overlayButtonLabel : 'Adicionar'}
          icon={overlayButtonIcon ? overlayButtonIcon : 'FiPlus'}
          onClick={() => setIsOpen(true)}
        />
      )}
      <Collapse isOpen={isOpen}>
        <div style={{ height: '87vh' }}>{children}</div>
        <div className='flex w-100 justify-center'>
          <Button
            text='SUBMIT'
            className='mr-3'
            icon='FiCheck'
            onClick={() => onSubmit()}
          />
          <Button
            text='CANCEL'
            icon='FiX'
            onClick={() => (onClose ? onClose() : setIsOpen(false))}
          />
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
  z-index: ${({ isOpen }) => (isOpen ? 999 : 0)};
`;

export const Section = styled.div`
  box-shadow: ${props => props.theme.shadowsm};
  border-radius: ${props => props.theme.rounded};
  background-color: ${props => props.theme.light};
  padding: 1rem;
  height: 55vh;
  overflow-y: auto;
`;
