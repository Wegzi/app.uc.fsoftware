import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Label } from '../../Components/Typography';
import gradientLight from '../../assets/images/mesh-gradient-light.png';
import gradientDark from '../../assets/images/mesh-gradient-dark.png';
import { ThemeContext } from '../../context/ThemeState';
import { TextInput } from '../../Components/TextInput';
import { Button } from '../../Components/Button';
import { useHistory } from 'react-router';
import Services from '../Service/Services';
export default function Home() {
  const [search, setSearch] = useState('');

  const { isDark } = useContext(ThemeContext);
  const history = useHistory();

  function onSearch() {
    history.push(`?q=${search}`);
  }
  return (
    <div className='h-full'>
      <div className='p-3 container mx-auto'>
        <SearchContainer className='rounded-xl mb-5 p-3' isDark={isDark}>
          <Label
            className='text-center'
            text='USJT IT Services'
            size='2'
            bold
            style={{ color: '#fff' }}
          />
          <div className='md:w-1/2 w-full mx-auto flex'>
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
          </div>
        </SearchContainer>
        <Services />
      </div>
    </div>
  );
}
const SearchContainer = styled.div`
  background-image: ${({ isDark }) =>
    isDark ? `url(${gradientDark})` : `url(${gradientLight})`};
  background-size: cover;
  background-position: center;
  /* label {
    font-size: 1rem;
  } */
`;
function Card() {
  return (
    <CardService className='rounded-lg p-3'>
      <CardImage className='p-3 rounded-full mx-auto'></CardImage>
      <div>
        <p className='overflow-ellipsis overflow-hidden mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          placerat, massa condimentum lacinia fringilla, ex mauris lacinia
          tellus
        </p>
      </div>
    </CardService>
  );
}

const CardImage = styled.div`
  width: 70%;
  height: 120px;
  background-color: ${props => props.theme.primary};
`;
const CardService = styled.div`
  min-height: 390px;
  background-color: ${props => props.theme.light};
`;
