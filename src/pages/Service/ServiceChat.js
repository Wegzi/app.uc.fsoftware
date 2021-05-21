import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Components/Button';
import { OverflowCollapse } from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import ServiceMessage from '../../services/ServiceMessage';

export default function ServiceChat({ service, isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const { user } = useContext(AppContext);
  useEffect(() => {
    fetchMessages(service._id);
  }, [service._id]);

  async function fetchMessages(service_id) {
    try {
      const service = new ServiceMessage();
      const { data } = await service.getServiceMessages(service_id);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function sendMessages(service_id, service_team) {
    try {
      const service = new ServiceMessage();
      const { data } = await service.createMessage(service_id, {
        owner_id: user?._id,
        message,
        answerer: service_team.includes(user?._id),
      });
      setMessages(stMessages => [...stMessages, data]);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  }
  return (
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
            {messages.map(message => (
              <Chat key={message._id} message={message} />
            ))}
          </ChatCard>
          <InputContainer className='flex p-2'>
            <TextInput
              className='w-full mr-2'
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
            <Button
              icon='FiSend'
              type='input'
              onClick={() => sendMessages(service._id, service.team)}
            />
          </InputContainer>
        </ChatContainer>
      </div>
    </OverflowCollapse>
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

function Chat({ message: { message, ...data } }) {
  return (
    <StyledChat className='mb-2 rounded-xl p-1 px-2' answerer={data.answerer}>
      <Label className='mb-1 italic' text={data.user.name} bold />
      <p>{message}</p>
      <div className='text-right'>
        <Label
          className='mt-3 italic'
          text={new Date(data.created_at).toLocaleString()}
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
