import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import User from '../../services/User';

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const history = useHistory();
  const appCtx = useContext(AppContext);

  useEffect(() => {
    if (appCtx.user) {
      history.push('/profile');
    }
  }, [appCtx.user, history]);

  async function handleLogin() {
    try {
      const service = new User();
      const { data } = await service.login(login.email, login.password);
      console.log(data);
      appCtx.setUser(data);
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/profile');
    } catch (error) {
      console.log(error);
      console.error(error?.response?.data?.errors);
      console.error(error?.response?.data?.message);
    }
  }

  function handleChange({ target: { name, value } }) {
    setLogin(stLogin => ({ ...stLogin, [name]: value }));
  }

  return (
    <div className='container mx-auto p-3'>
      <Label text='Login' size='1.2' className='text-center' semiBold />
      <Card className='p-4 mt-2 rounded shadow'>
        <TextInput
          label='Email'
          className='mb-2'
          onChange={handleChange}
          name='email'
          type='email'
        />
        <TextInput
          label='Senha'
          className='mb-4'
          onChange={handleChange}
          name='password'
          type='password'
        />

        <Button text='Login' className='mx-auto w-3/4' onClick={handleLogin} />
      </Card>
    </div>
  );
}
const Card = styled.div`
  background-color: ${({ theme }) => theme.card.background};
`;
