import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import ServiceService from '../../services/Service';
import ServiceChat from './ServiceChat';
import { Stars } from './Services';
import ServiceForm from './ServiceForm';
import developer from '../../assets/images/developer.jpg';

export default function Service() {
  const [service, setService] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { rules } = useContext(AppContext);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    findService(params.service_id);
  }, [params.service_id]);

  async function findService(serviceId) {
    try {
      const service = new ServiceService();
      const { data } = await service.findService(serviceId);
      setService(data);
    } catch (error) {}
  }

  function onSave(newService) {
    setService({ ...newService });
  }
  async function onDelete(serviceId) {
    try {
      const service = new ServiceService();
      await service.deleteService(serviceId);
      history.goBack();
    } catch (error) {}
  }
  return (
    <div className='container p-3 mx-auto'>
      <Card className='mx-auto rounded-xl shadow-2xl'>
        <CardImage className='flex'>
          <div className='mt-auto p-2 flex flex-wrap'>
            {service.tags?.map((tag, i) => (
              <Badge className='mr-2' key={i} text={tag} bold />
            ))}
          </div>
        </CardImage>
        <CardBody className='p-3'>
          <Label text={service.title} bold size='2' />
          <Stars value={service.rating ?? 0} />
          <div className='flex my-5 items-center'>
            <Label
              type='success'
              text={`R$ ${service.value ?? '-'}`}
              bold
              size='2'
              className='mr-3'
            />
            <Button
              text='Contratar'
              icon='FiCheck'
              type='success'
              onClick={() => history.push(`${params.service_id}/purchase`)}
            />
          </div>
          <p className='my-2' style={{ fontSize: '1.3rem' }}>
            {service.description}
          </p>
        </CardBody>
        <CardFooter className='flex justify-between p-3'>
          <Button
            icon='FiMessageSquare'
            text='Duvidas comunidade'
            className='mr-3'
            onClick={() => setIsOpen(!isOpen)}
          />
          {rules.delete_services ? (
            <Button
              text='Deletar'
              icon='FiTrash2'
              onClick={() => onDelete(service._id)}
              type='danger'
              className='ml-3'
            />
          ) : null}
        </CardFooter>
      </Card>

      <ServiceChat isOpen={isOpen} setIsOpen={setIsOpen} service={service} />
      {rules.update_services ? (
        <ServiceForm onSave={onSave} service={service} />
      ) : null}
    </div>
  );
}

const CardImage = styled.div`
  height: 200px;
  width: 100%;
  background-color: orange;
  background-image: url(${developer});
  object-fit: cover;
  background-size: 100%;
  flex: 0 0 auto;
`;
const Card = styled.div`
  overflow: hidden;
  /* height: 300px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;
const CardBody = styled.div`
  height: 100%;
`;
const CardFooter = styled.div`
  padding: 5px;
`;
const Badge = styled(Label)`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
  line-height: 1.2;
  color: #fff;
`;
