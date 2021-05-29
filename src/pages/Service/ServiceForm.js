import React, { useContext, useEffect, useState } from 'react';
import SelectInput, {
  CreatableSelectInput,
} from '../../Components/input/SelectInput';
import { TextArea } from '../../Components/input/TextArea';
import CollapseForm from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import toast from '../../Components/toast';
import { Icon, Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import Service from '../../services/Service';
import User from '../../services/User';

const initialState = {
  title: '',
  description: '',
  value: '',
  team: [],
  tags: [],
};
export default function ServiceForm({ onSave, service: propsService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [tags, setTags] = useState([]);
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

  useEffect(() => {
    fetchUsers();
    fetchTags();
  }, []);

  async function fetchUsers() {
    try {
      const service = new User();
      const { data } = await service.getUsers();
      const students = data.filter(user => user.role === 'student');
      setStudents(students);
    } catch (error) {}
  }
  async function fetchTags() {
    try {
      const service = new Service();
      const { data } = await service.getTags();
      setTags(data);
    } catch (error) {}
  }
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
    } catch (error) {
      if (error?.response?.data[0]) {
        error?.response?.data?.forEach(invalid => {
          toast.error(invalid.message);
        });
      }
    }
  }

  function handleChange({ target: { name, value } }) {
    setNewService(stService => ({ ...stService, [name]: value }));
  }

  function handleChangeTeam(options) {
    setNewService(stService => ({
      ...stService,
      team: options?.map(option => option.value) ?? [],
    }));
  }
  function handleChangeTags(options) {
    setNewService(stService => ({
      ...stService,
      tags: options?.map(option => option.value) ?? [],
    }));
  }

  const studentOptions = students.map(student => ({
    label: student.name,
    value: student._id,
  }));
  const tagsOptions = tags.map(tag => ({ label: tag, value: tag }));

  const selectedTags = newService.tags.map(tag => ({ label: tag, value: tag }));
  const selectedStudents = studentOptions.filter(
    student => ~newService.team.indexOf(student.value)
  );

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
          className='mb-2'
        />
        <TextInput
          name='value'
          onChange={handleChange}
          value={newService.value}
          placeholder='Valor'
          label='Valor'
          className='mb-2'
        />
        <SelectInput
          onChange={handleChangeTeam}
          label='Time'
          className='mb-2'
          options={studentOptions}
          isMulti
          value={selectedStudents}
        />
        <CreatableSelectInput
          onChange={handleChangeTags}
          options={tagsOptions}
          label='Tags'
          className='mb-2'
          isClearable
          isMulti
          value={selectedTags}
        />
      </div>
    </CollapseForm>
  );
}
