import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from '../../context/AppState';
import { ThemeContext } from '../../context/ThemeState';
import { Button } from '../Button';
import Collapse from '../Collapse';
import { Icon } from '../Typography';
import { MenuItem } from './styles';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const { user, setUser } = useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    const not_logged_options = [
      { title: 'Sign-in', key: 'login', path: '/login', icon: 'FiArrowRight' },
      { title: 'Cadastar', key: 'signup', path: '/signup', icon: 'FiPower' },
    ];
    const logged = [
      {
        title: 'Profile',
        key: 'profile',
        path: '/profile',
        icon: 'FiUser',
      },
      {
        title: 'Logout',
        key: 'logout',
        action: () => {
          setUser();
          localStorage.removeItem('user');
          history.push('/home');
        },
        icon: 'FiPower',
      },
    ];
    if (user) {
      setOptions(logged);
    } else {
      setOptions(not_logged_options);
    }
  }, [history, setUser, user]);

  return (
    <div>
      <Button icon='FiUser' onClick={() => setIsOpen(!isOpen)} />
      <CollapseMenu isOpen={isOpen} options={options} />
    </div>
  );
}

const CollapseMenu = ({ isOpen, options }) => {
  const { switchTheme, isDark } = useContext(ThemeContext);

  return (
    <div
      className='absolute shadow-xl rounded-bl-lg'
      style={{
        zIndex: '900',
        right: 0,
        bottom: 0,
        transform: 'translateY(100%)',
      }}
    >
      <Collapse isOpen={isOpen}>
        <MenuContainer className='rounded-bl-lg p-2'>
          <ul>
            {options.map(option =>
              option.action ? (
                <div key={option.key} onClick={option.action} className='mb-2'>
                  <MenuItem className='p-3 rounded flex items-center'>
                    <Icon icon={option.icon} className='mr-2' />
                    {option.title}
                  </MenuItem>
                </div>
              ) : (
                <Link
                  key={option.key}
                  to={option.path}
                  onClick={option.action}
                  className='mb-2'
                >
                  <MenuItem className='p-3 rounded flex items-center'>
                    <Icon icon={option.icon} className='mr-2' />
                    {option.title}
                  </MenuItem>
                </Link>
              )
            )}
          </ul>
          <Button
            className='ml-auto'
            onClick={() => switchTheme()}
            text={isDark ? 'Light' : 'Dark'}
          />
        </MenuContainer>
      </Collapse>
    </div>
  );
};

const MenuContainer = styled.div`
  max-height: 50vh;
  background-color: ${({ theme }) => theme.collapseMenu.background};
  min-width: 30vw;
  margin-bottom: 3px;
`;
