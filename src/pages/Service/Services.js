import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextArea } from '../../Components/input/TextArea';
import CollapseForm from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Icon, Label } from '../../Components/Typography';

export default function Search({ location }) {
  const query = new URLSearchParams(location.search).get('q');

  const services = [
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
  return (
    <div className='p-3'>
      {query ? <Label text={`Buscando por: ${query}`} /> : null}
      <div>
        {services.map(service => (
          <Link to={`/services/${service._id}`} key={service._id}>
            <ServiceContainer className='rounded shadow mb-3 px-3 pt-3'>
              <div className='flex ml-auto justify-between'>
                <Label text={service.title} bold />
                <Stars value={service.stars} />
              </div>
              <div>
                <p>{service.description}</p>
              </div>
              <div className='mt-3 flex justify-between italic'>
                <div>
                  <Label text={`${service.price} R$`} bold />
                </div>
                <div className='flex'>
                  <Label className='mr-4' text={service.user_name} bold />
                  {service.created_at.toLocaleString()}
                </div>
              </div>
            </ServiceContainer>
          </Link>
        ))}
      </div>
      <CollapseForm>
        <div className='flex items-center mb-3'>
          <Icon icon='FiZap' size='18' className='mr-2' />
          <Label text='Add new service' bold size='1.3' />
        </div>
        <div>
          <TextInput placeholder='Title' label='title' className='mb-2' />
          <TextArea placeholder='Description' label='description' />
        </div>
      </CollapseForm>
      {/* <ChatContainer /> */}
    </div>
  );
}
const ServiceContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

function Stars({ value }) {
  const stars = new Array(5).fill(0).map((_, i) => i + 1 <= value);
  return (
    <div className='flex'>
      {stars.map(star => (
        <Icon
          size='20'
          className='mr-2'
          icon={star ? 'AiFillStar' : 'AiOutlineStar'}
        />
      ))}
    </div>
  );
}
