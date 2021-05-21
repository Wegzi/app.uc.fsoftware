import React, { useContext, useEffect, useState } from 'react';
import { TextArea } from '../../Components/input/TextArea';
import CollapseForm from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Icon, Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import Service from '../../services/Service';

const initialState = {
  title: '',
  description: '',
  value: '',
};
export default function ServiceForm({ onSave, service: propsService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newService, setNewService] = useState({
    ...initialState,
  });
  const { user } = useContext(AppContext);
  useEffect(() => {
    setNewService(stService => ({ ...stService, owner_id: user?._id }));
  }, [user]);
  useEffect(() => {
    if (propsService)
      setNewService(stService => ({ ...stService, ...propsService }));
  }, [propsService]);

  async function handleSave() {
    try {
      const service = new Service();
      if (!propsService?._id) {
        const { data } = await service.createService(newService);
        setIsOpen(false);
        const timeout = setTimeout(() => {
          onSave(data);
          setNewService(stService => ({ ...stService, ...initialState }));
        }, 400);
        timeout();
        clearTimeout(timeout);
      } else {
        const { data } = await service.updateService(
          propsService._id,
          newService
        );
        setIsOpen(false);
        const timeout = setTimeout(() => {
          onSave(data);
          setNewService(stService => ({ ...stService, ...initialState }));
        }, 400);
        timeout();
        clearTimeout(timeout);
      }
    } catch (error) {}
  }

  function handleChange({ target: { name, value } }) {
    setNewService(stService => ({ ...stService, [name]: value }));
  }
  return (
    <CollapseForm
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onSubmit={handleSave}
      overlayButtonLabel={propsService?._id ? 'Atualizar' : ''}
      overlayButtonIcon={propsService?._id ? 'FiEdit' : ''}
    >
      <div className='flex items-center mb-3'>
        <Icon icon='FiZap' size='18' className='mr-2' />
        <Label
          text={`${propsService?._id ? 'Atualizar' : 'Adicionar'} serviço `}
          bold
          size='1.3'
        />
      </div>
      <div>
        <TextInput
          name='title'
          onChange={handleChange}
          value={newService.title}
          placeholder='Título'
          label='Título'
          className='mb-2'
        />
        <TextArea
          name='description'
          onChange={handleChange}
          value={newService.description}
          placeholder='Descrição'
          label='Descrição'
        />
        <TextInput
          name='value'
          onChange={handleChange}
          value={newService.value}
          placeholder='Valor'
          label='Valor'
        />
      </div>
    </CollapseForm>
  );
}
