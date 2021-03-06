import Color from 'color';
import React, { useContext, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import Purchase from '../../services/Purchase';
import User from '../../services/User';

export default function Services() {
  const [services, setServices] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [servingService, setServingService] = useState([]);
  const history = useHistory();
  const { user } = useContext(AppContext);
  const userId = user?._id;

  useEffect(() => {
    if (userId) {
      fetchSelfServices(userId);
      fetchPurchases(userId);
      fetchServingService(userId);
    }
  }, [userId]);
  async function fetchSelfServices(userId) {
    try {
      const service = new User();
      const { data } = await service.findUserServices(userId);
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchPurchases(userId) {
    try {
      const service = new User();
      const { data } = await service.findUserPurchases(userId);
      setPurchases(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchServingService(userId) {
    try {
      const service = new Purchase();
      const { data } = await service.getServingService(userId);
      setServingService(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {user?.role === 'administrator' || user?.role === 'coordinator' ? (
        <>
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
        </>
      ) : null}
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
      {user?.role === 'student' ? (
        <>
          <div className='my-5 border' />
          <Label text='Serviços prestando' bold />
          <div className='shadow rounded'>
            {servingService.map(({ purchase, ...service }) => (
              <SettingsItem
                key={purchase._id}
                label={`${service.title} - ${new Date(
                  service.created_at
                ).toLocaleString()}`}
                onClick={() => history.push(`/purchase/${purchase._id}/track`)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
const SettingsItem = ({ label, onClick }) => (
  <ListItem className='p-3 flex justify-between' onClick={onClick}>
    <div className='flex'>
      <Label text={label} semiBold />
    </div>
    <FiChevronRight size='19' />
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
