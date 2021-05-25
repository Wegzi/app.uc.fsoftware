import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import User from '../../services/User';

export default function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpf: '',
    birth_date: '',
    phone_number: '',
  });
  const history = useHistory();
  const appCtx = useContext(AppContext);
  async function handleLogin() {
    try {
      const service = new User();
      const { data } = await service.signup(user);
      appCtx.setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/profile');
    } catch (error) {
      console.log(error);
      console.error(error?.response?.data?.errors);
      console.error(error?.response?.data?.message);
    }
  }
  async function handleChange({ target: { value, name } }) {
    setUser(stUser => ({ ...stUser, [name]: value }));
  }
  return (
    <div className='container mx-auto p-3'>
      <Label text='Cadastrar' size='1.2' className='text-center' semiBold />
      <Card className='p-4 mt-2 rounded shadow'>
        <TextInput
          name='name'
          label='Nome'
          className='mb-2'
          type='text'
          onChange={handleChange}
        />
        <TextInput
          name='email'
          label='Email'
          className='mb-2'
          type='email'
          onChange={handleChange}
        />
        <TextInput
          name='password'
          label='Senha'
          className='mb-4'
          type='password'
          onChange={handleChange}
        />
        <TextInput
          name='cpf'
          label='CPF'
          className='mb-4'
          type='password'
          onChange={handleChange}
        />
        <TextInput
          name='birth_date'
          label='Data de nascimento'
          className='mb-4'
          type='date'
          onChange={handleChange}
        />
        <TextInput
          name='phone_number'
          label='Telefone'
          className='mb-4'
          type='number'
          onChange={handleChange}
        />
        <Button
          text='Cadastrar'
          className='mx-auto w-3/4'
          onClick={handleLogin}
        />
      </Card>
    </div>
  );
}
const Card = styled.div`
  background-color: ${({ theme }) => theme.card.background};
`;
