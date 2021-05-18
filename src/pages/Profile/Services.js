import Color from 'color';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { ChevronRight } from '../../assets/outline';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import UserService from '../../services/UserService';

export default function Services() {
  const [services, setServices] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const history = useHistory();
  const { user } = useContext(AppContext);
  const userId = user?._id;

  useEffect(() => {
    if (userId) {
      fetchSelfServices(userId);
      fetchPurchases(userId);
    }
  }, [userId]);
  async function fetchSelfServices(userId) {
    try {
      const service = new UserService();
      const { data } = await service.findUserServices(userId);
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchPurchases(userId) {
    try {
      const service = new UserService();
      const { data } = await service.findUserPurchases(userId);
      setPurchases(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Label text='Seus serviços' bold />
      <div className='shadow rounded'>
        {services.map((service, i) => (
          <SettingsItem
            key={i}
            label={service.title}
            onClick={() => history.push(`/services/${service._id}`)}
          />
        ))}
      </div>
      <div className='my-5 border' />
      <Label text='Serviços contatados' bold />
      <div className='shadow rounded'>
        {purchases.map(({ service, ...purchase }) => (
          <SettingsItem
            key={purchase._id}
            label={`${service.title} - ${new Date(
              purchase.created_at
            ).toLocaleString()}`}
            onClick={() => history.push(`/purchase/${purchase._id}/track`)}
          />
        ))}
      </div>
    </div>
  );
}
const SettingsItem = ({ label, onClick }) => (
  <ListItem className='p-3 flex justify-between' onClick={onClick}>
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
