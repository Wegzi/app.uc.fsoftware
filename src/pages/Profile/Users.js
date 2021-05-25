import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../../Components/Button';
import SelectInput from '../../Components/input/SelectInput';
import CollapseForm from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Icon, Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import User from '../../services/User';
import { ListItem } from './ListItem';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState();
  const appCtx = useContext(AppContext);
  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    try {
      const service = new User();
      const { data } = await service.getUsers();
      setUsers(data);
    } catch (error) {}
  }

  function handleDelete(user) {
    handleClose();
    const newUsers = users.filter(stUser => stUser._id !== user._id);
    setUsers(newUsers);
  }
  function handleUpdate(user) {
    handleClose();
    const applyMap = args => [args._id, args];
    const appsToMap = users.map(applyMap);
    const newAppToMap = [user._id, user];
    const newUsers = Array.from(new Map([...appsToMap, newAppToMap]).values());
    setUsers(newUsers);
  }
  function handleCreate(user) {
    handleClose();
    setUsers(stUsers => [...stUsers, user]);
  }

  function handleClose() {
    setIsOpen(false);
    setEditUser();
  }

  const filteredUser = users.filter(user => user._id !== appCtx.user._id);
  return (
    <div>
      <Label text='Todos os usuários' bold />

      <div className='shadow rounded'>
        {filteredUser.map(user => (
          <ListItem
            key={user._id}
            label={user.name}
            icon='FiEdit'
            onClick={() => {
              setEditUser(user);
              setIsOpen(!isOpen);
            }}
          />
        ))}
      </div>
      <UserForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={handleClose}
        user={editUser}
        onUpdate={handleUpdate}
        onCreate={handleCreate}
        onDelete={handleDelete}
      />
    </div>
  );
}

const initialState = {
  name: '',
  email: '',
  password: '',
  cpf: '',
  birth_date: '',
  phone_number: '',
  role: 'administrator',
};
const roles = [
  { label: 'Administrador', value: 'administrator' },
  { label: 'Coordenador', value: 'coordinator' },
  { label: 'Aluno', value: 'student' },
  { label: 'Usuário', value: 'user' },
];

function UserForm({
  user: propsUser,
  isOpen,
  setIsOpen,
  onClose,
  onUpdate,
  onCreate,
  onDelete,
}) {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (propsUser) setUser(stUser => ({ ...stUser, ...propsUser }));
  }, [propsUser]);

  async function handleSave() {
    try {
      if (propsUser?._id) {
        const service = new User();
        const { data } = await service.updateUser(user._id, user);
        onUpdate(data);
      } else {
        const service = new User();
        const { data } = await service.signup(user);
        onCreate(data);
      }
      setUser(initialState);
    } catch (error) {}
  }

  async function deleteUser() {
    try {
      const service = new User();
      await service.deleteUser(user._id);
      onDelete(user);
    } catch (error) {}
  }
  async function handleChange({ target: { value, name } }) {
    setUser(stUser => ({ ...stUser, [name]: value }));
  }
  const selectedRole = roles.find(role => role.value === user.role);
  return (
    <CollapseForm
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={onClose}
      onSubmit={handleSave}
      overlayButtonLabel={propsUser?._id ? 'Atualizar' : ''}
      overlayButtonIcon={propsUser?._id ? 'FiEdit' : ''}
      onDelete={onDelete}
    >
      <div className='flex items-center mb-3'>
        <Icon icon='FiZap' size='18' className='mr-2' />
        <Label
          text={`${propsUser?._id ? 'Atualizar' : 'Adicionar'} usuário `}
          bold
          size='1.3'
        />
        {propsUser?._id ? (
          <Button
            className='ml-auto'
            type='danger'
            icon='FiTrash2'
            onClick={deleteUser}
          />
        ) : null}
      </div>
      <div>
        <TextInput
          name='name'
          label='Nome'
          className='mb-2'
          type='text'
          onChange={handleChange}
          value={user.name}
        />
        <SelectInput
          options={roles}
          label='Tipo'
          className='mb-2'
          value={selectedRole}
          onChange={ev =>
            handleChange({ target: { name: 'role', value: ev.value } })
          }
        />
        {!propsUser?._id ? (
          <>
            <TextInput
              name='email'
              label='Email'
              className='mb-2'
              type='email'
              value={user.email}
              onChange={handleChange}
            />
            <TextInput
              name='password'
              label='Senha'
              className='mb-4'
              type='password'
              onChange={handleChange}
              value={user.password}
            />
          </>
        ) : null}
        <TextInput
          name='cpf'
          label='CPF'
          className='mb-4'
          type='text'
          onChange={handleChange}
          value={user.cpf}
        />
        <TextInput
          name='birth_date'
          label='Data de nascimento'
          className='mb-4'
          type='date'
          onChange={handleChange}
          value={
            user.birth_date
              ? new Date(user.birth_date).toLocaleDateString('en-CA')
              : undefined
          }
        />
        <TextInput
          name='phone_number'
          label='Telefone'
          className='mb-4'
          type='text'
          onChange={handleChange}
          value={user.phone_number}
        />
      </div>
    </CollapseForm>
  );
}
