import Color from 'color';
import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '../../assets/outline';
import { Icon, Label } from '../../Components/Typography';

export default function Settings() {
  return (
    <div>
      <ul className='shadow rounded'>
        <SettingsItem
          className='p-3 rounded'
          icon='user-circle'
          label='Account'
        />
        <SettingsItem
          className='p-3 rounded'
          icon='light-bulb'
          label='Help and Support'
        />
        <SettingsItem
          className='p-3 rounded'
          icon='information-circle'
          label='About'
        />
      </ul>
    </div>
  );
}
const SettingsItem = ({ icon, label }) => (
  <ListItem className='p-3 flex justify-between'>
    <div className='flex'>
      <Icon icon={icon} className='inline mr-2' style={{ width: '19px' }} />
      <Label text={label} semiBold />
    </div>
    <ChevronRight style={{ width: '19px' }} />
  </ListItem>
);
const ListItem = styled.div`
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
