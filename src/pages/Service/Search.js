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
      description: 'sqweqweqw',
      created_at: new Date(),
    },
    {
      _id: '12',
      title: 'Serviço 2',
      description: 'sqweqweqw',
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
              <div>
                <Label text={service.title} bold />
              </div>
              <div>
                <p>{service.description}</p>
              </div>
              <div className='mt-3 flex justify-end italic'>
                {service.created_at.toLocaleString()}
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
