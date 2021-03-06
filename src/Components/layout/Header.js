import Color from 'color';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Button } from '../Button';
import Collapse from '../Collapse';
import { Label } from '../Typography';
// import { TextInput } from '../TextInput';
import ProfileMenu from './ProfileMenu';
import logo from '../../assets/images/logo.png';
const MenuContainer = styled.div`
  max-height: 50vh;
  background-color: ${({ theme }) => theme.collapseMenu.background};
  width: 100vw;
  margin-bottom: 3px;
`;
const DesktopMenuItem = styled(Label)`
  font-weight: 700;
  cursor: pointer;
  font-style: normal;
  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.ultralight).darken(0.05).hex()};
    box-shadow: ${({ theme }) => theme.shadow};
    color: ${({ theme }) => theme.text.dark};
  }
`;
const MenuItem = styled.div`
  background-color: ${({ theme }) => theme.ultralight};
  line-height: 1.2;
  margin-bottom: 8px;
  font-weight: 700;
  cursor: pointer;
  color: ${props => props.theme.text.dark};
  font-style: normal;
  &:hover {
    background-color: ${({ theme }) =>
      Color(theme.ultralight).darken(0.05).hex()};
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  ${'' /* color: ${(props) => props.theme.white}; */}
  display: flex;
  align-items: center;
  padding: 1rem;
  padding: 1rem;
  ${'' /* font-size: 1.5rem; */}
  font-weight: 600;
  font-style: italic;
  justify-content: space-between;
`;

export function Header() {
  // const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // const history = useHistory();
  // function onSearch() {
  //   history.push(`/services?q=${search}`);
  // }

  const options = [
    { title: 'Home', key: 'home', path: '/home' },
    { title: 'Services', key: 'services', path: '/home' },
    { title: 'Help and Support', key: 'help_and_support', path: '/help' },
    { title: 'About', key: 'about', path: '/about' },
  ];
  return (
    <>
      <HeaderContainer>
        <div className='sm:block md:hidden'>
          <MenuToggler isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        {/* <div className='flex px-4'>
          <TextInput
            value={search}
            onChange={ev => setSearch(ev.target.value)}
            placeholder='Buscar'
          />
          <Button
            icon='FiSearch'
            type='input'
            className='ml-1'
            onClick={onSearch}
          />
        </div> */}
        <div className='hidden md:flex flex-row items-center'>
          <img src={logo} alt='' style={{ width: '70px', height: '70px' }} />
          <DesktopMenu options={options} />
        </div>
        <ProfileMenu />
        <CollapseMenu isOpen={isOpen} options={options} />
      </HeaderContainer>
    </>
  );
}

const DesktopMenu = ({ options }) => (
  <ul className='flex'>
    {options.map(option => (
      <Link key={option.key} to={option.path}>
        <DesktopMenuItem className='px-3 rounded' bold text={option.title} />
      </Link>
    ))}
  </ul>
);
const CollapseMenu = ({ isOpen, options }) => (
  <div
    className='absolute shadow-xl rounded-b-lg'
    style={{ zIndex: '900', left: 0, bottom: 0, transform: 'translateY(100%)' }}
  >
    <Collapse isOpen={isOpen}>
      <MenuContainer className='rounded-b-lg p-2 pb-8'>
        <ul>
          {options.map(option => (
            <Link key={option.key} to={option.path} className='mb-2'>
              <MenuItem className='p-3 rounded'>{option.title}</MenuItem>
            </Link>
          ))}
        </ul>
      </MenuContainer>
    </Collapse>
  </div>
);
const MenuToggler = ({ isOpen, onClick }) => (
  <>
    <div className='h-full cursor-pointer' onClick={onClick}>
      {isOpen ? (
        <FiX className='h-full' size='26' />
      ) : (
        <FiMenu className='h-full' size='26' />
      )}
    </div>
  </>
);
