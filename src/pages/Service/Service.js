import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../../Components/Button';
import { Label } from '../../Components/Typography';
import ServiceService from '../../services/Service';
import ServiceChat from './ServiceChat';
import ServiceForm from './ServiceForm';

export default function Service() {
  const [service, setService] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
      <div className='flex items-center justify-between'>
        <Label text={service.title} semiBold size='1.2' />
        <div className='flex'>
          <Button
            className='mr-3'
            text='Contratar'
            icon='FiCheck'
            onClick={() => history.push(`${params.service_id}/purchase`)}
          />
          <Button
            text='Deletar'
            icon='FiTrash2'
            onClick={() => onDelete(service._id)}
            type='danger'
          />
        </div>
      </div>
      <div className='flex'>
        <Label text='Tags: ' className='mr-2' />
        {service.tags?.map((tag, i) => (
          <Label className='mr-2' key={i} text={tag} />
        ))}
      </div>
      <p className='my-2'>{service.description}</p>
      <Label text={`${service.value ?? '-'} R$`} />
      <div className='mt-3'>
        <div className='flex items-center '>
          <Button
            text='Duvidas comunidade'
            className='mr-3'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <ServiceChat isOpen={isOpen} setIsOpen={setIsOpen} service={service} />
        <ServiceForm onSave={onSave} service={service} />
      </div>
    </div>
  );
}
