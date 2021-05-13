import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';

export default function Signup() {
  const history = useHistory();
  function handleLogin() {
    history.push('/profile');
  }
  return (
    <div className='container mx-auto p-3'>
      <Label text='Cadastrar' size='1.2' className='text-center' semiBold />
      <Card className='p-4 mt-2 rounded shadow'>
        <TextInput label='Email' className='mb-2' type='email' />
        <TextInput label='Senha' className='mb-4' type='password' />
        <TextInput label='CPF' className='mb-4' type='password' />
        <TextInput label='Telefone' className='mb-4' type='password' />
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
