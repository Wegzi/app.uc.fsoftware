import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeState';
import { Button } from '../Button';
import Collapse from '../Collapse';
import { Icon } from '../Typography';
import { MenuItem } from './styles';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { title: 'Sign-in', key: 'login', path: '/login', icon: 'FiArrowRight' },
    { title: 'Cadastar', key: 'signup', path: '/signup', icon: 'FiUserPlus' },
  ];
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
            {options.map(option => (
              <Link key={option.key} to={option.path} className='mb-2'>
                <MenuItem className='p-3 rounded flex items-center'>
                  <Icon icon={option.icon} className='mr-2' />
                  {option.title}
                </MenuItem>
              </Link>
            ))}
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
  width: 90vw;
  margin-bottom: 3px;
`;
