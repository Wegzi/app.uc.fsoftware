import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import CollapseForm, {
  OverflowCollapse,
} from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';

const SERVICE = {
  _id: '1',
  title: 'Serviço 1',
  user_name: 'Usuário 1',
  stars: 4,
  price: 100.0,
  tags: ['desenvolvimento'],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
  placerat, massa condimentum lacinia fringilla, ex mauris lacinia
  tellus`,
  created_at: new Date(),
};

export default function Service() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const params = useParams();
  return (
    <div className='container p-3 mx-auto'>
      <div className='flex items-center justify-between'>
        <Label text={SERVICE.title} semiBold size='1.2' />
        <Button
          text='Contratar'
          icon='FiCheck'
          onClick={() => history.push(`${params.service_id}/purchase`)}
        />
      </div>
      <div className='flex'>
        <Label text='Tags: ' className='mr-2' />
        {SERVICE.tags.map(tag => (
          <Label className='mr-2' text={tag} />
        ))}
      </div>
      <p className='my-2'>{SERVICE.description}</p>
      <Label text={`${SERVICE.price} R$`} />
      <div className='mt-3'>
        <div className='flex items-center '>
          <Button
            text='Duvidas comunidade'
            className='mr-3'
            // type='light'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <OverflowCollapse isOpen={isOpen}>
          <div className='flex flex-col h-full'>
            <Button
              className='ml-auto mb-3'
              text='Fechar'
              icon='FiX'
              onClick={() => setIsOpen(false)}
            />
            <ChatContainer className='shadow rounded'>
              <ChatCard className='p-2'>
                {new Array(20).fill().map((_, i) => (
                  <Chat key={i} answerer={i % 2} />
                ))}
              </ChatCard>
              <InputContainer className='flex p-2'>
                <TextInput className='w-full mr-2' />
                <Button icon='FiSend' type='input' />
              </InputContainer>
            </ChatContainer>
          </div>
        </OverflowCollapse>
      </div>
    </div>
  );
}
const InputContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.light};
`;
const ChatCard = styled.div`
  height: 100%;
  overflow: auto;
`;
const ChatContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.card.background};
`;

function Chat({ answerer }) {
  return (
    <StyledChat className='mb-2 rounded-xl p-1 px-2' answerer={answerer}>
      <Label className='mb-1 italic' text='Nome do usuário' bold />
      <p>resposta</p>
      <div className='text-right'>
        <Label
          className='mt-3 italic'
          text={new Date().toLocaleString()}
          size='0.75'
        />
      </div>
    </StyledChat>
  );
}

const StyledChat = styled.div`
  margin-left: ${({ answerer }) => (answerer ? 'auto' : 'none')};
  width: 75%;
  background-color: ${({ theme, answerer }) =>
    answerer ? theme.primary : theme.light};
  color: ${({ theme, answerer }) => (answerer ? '#E0E0E0' : theme.text.dark)};
  &:last-child {
    border-bottom: 0;
  }
`;
