import Color from 'color';
import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from '../../assets/outline';
import { Label } from '../../Components/Typography';

const SERVICES = [
  {
    _id: '1',
    title: 'Serviço 1',
    user_name: 'Usuário 1',
    stars: 4,
    price: 100.0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
      placerat, massa condimentum lacinia fringilla, ex mauris lacinia
      tellus`,
    created_at: new Date(),
  },
  {
    _id: '12',
    title: 'Serviço 2',
    user_name: 'Usuário 2',
    stars: 2,
    price: 100.0,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
      placerat, massa condimentum lacinia fringilla, ex mauris lacinia
      tellus`,
    created_at: new Date(),
  },
];

export default function Services() {
  return (
    <div>
      <Label text='Serviços cadastrados' bold />
      <div>
        {SERVICES.map(service => (
          <SettingsItem label={service.title} />
        ))}
      </div>
      <div className='my-5 border' />
      <Label text='Serviços contatados' bold />
      <div>
        {[...SERVICES, ...SERVICES].map(service => (
          <SettingsItem label={service.title} />
        ))}
      </div>
    </div>
  );
}
const SettingsItem = ({ label }) => (
  <ListItem className='p-3 flex justify-between'>
    <div className='flex'>
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
