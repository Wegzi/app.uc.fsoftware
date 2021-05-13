import Color from 'color';
import React from 'react';
import styled from 'styled-components';
import { Label } from '../Typography';

// background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
// border-color: transparent;
// background-color: currentColor;
// background-size: 100% 100%;
// background-position: 50%;
// background-repeat: no-repeat;

const StyledCheckBox = styled.input.attrs(props => {
  return { ...props, input: props.theme.input };
})`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: ${props => props.theme.input.background};
  border-radius: ${props => props.theme.rounded};
  box-shadow: 0 0 0 1px transparent, 0 0 0 0 rgba(34, 36, 38, 0.15);
  transition: opacity 0.2s ease, background-color 0.2s ease, color 0.2s ease,
    background 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    background: ${({ input }) => Color(input.background).lighten(0.2)} none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:focus {
    background: ${({ input }) => Color(input.background).lighten(0.2)} none;
    box-shadow: 0 1px 1px 0px #00005529, 0 0 1px 2px #2224260a;
  }
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    border-color: transparent;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.primary};
  }
`;

export default function Checkbox({ label, className }) {
  return (
    <div className={`flex items-center ${className}`}>
      <StyledCheckBox type='checkbox' className='appearance-none mr-2' />
      <Label text={label} />
    </div>
  );
}
