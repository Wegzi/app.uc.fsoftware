import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import Collapse from '../../Components/Collapse';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import User from '../../services/User';
import { ListItem } from './ListItem';

export default function Users() {
  const [selectedUser, setSelectedUser] = useState();
  const [users, setUsers] = useState([]);
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

  function selectUser(user) {
    if (selectedUser?._id === user._id) setSelectedUser();
    else setSelectedUser(user);
  }
  function handleDelete(user) {
    const newUsers = users.filter(stUser => stUser._id !== user._id);
    setUsers(newUsers);
  }
  function handleOnSave(user) {
    const applyMap = args => [args._id, args];
    const appsToMap = users.map(applyMap);
    const newAppToMap = [user._id, user];
    const newUsers = Array.from(new Map([...appsToMap, newAppToMap]).values());
    setUsers(newUsers);
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
            icon='FiChevronDown'
            onClick={() => selectUser(user)}
          >
            <Collapse isOpen={selectedUser?._id === user._id}>
              <UserContainer>
                <UserForm
                  user={user}
                  onSave={handleOnSave}
                  onDelete={handleDelete}
                />
              </UserContainer>
            </Collapse>
          </ListItem>
        ))}
      </div>
    </div>
  );
}

function UserForm({ user: propsUser, onSave, onDelete }) {
  const [user, setUser] = useState({ ...propsUser });
  async function handleChange({ target: { value, name } }) {
    setUser(stUser => ({ ...stUser, [name]: value }));
  }

  async function updateUser() {
    try {
      const service = new User();
      const { data } = await service.updateUser(user._id, user);
      onSave(data);
    } catch (error) {}
  }

  async function deleteUser() {
    try {
      const service = new User();
      await service.deleteUser(user._id);
      onDelete(user);
    } catch (error) {}
  }

  return (
    <div className='p-3 '>
      <TextInput name='name' value={user.name} onChange={handleChange} />
      <div className='flex justify-center mt-4'>
        <Button text='Salvar' onClick={updateUser} className='mr-3' />
        <Button text='Delete' type='light' onClick={deleteUser} />
      </div>
    </div>
  );
}
const UserContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
`;
