import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from '../../Components/ProgressBar';
import { Label } from '../../Components/Typography';
import the_duck from '../../assets/images/theduck.png';
import { TabContainer, TabContent, Tabs } from '../../Components/Tabs';
import Settings from './Settings';
import Services from './Services';
import { AppContext } from '../../context/AppState';
import Users from './Users';
const Components = { settings: Settings, services: Services, users: Users };

export default function Profile() {
  const [currentTab, setCurrentTab] = useState('services');
  const { user } = useContext(AppContext);
  const TabComponent = Components[currentTab];
  return (
    <>
      <div>
        <MainContainer className='rounded-b-xl shadow-xl flex'>
          <UserInfo>
            <div>
              <AvatarBubble className='mx-3 shadow-xl'>
                <img src={the_duck} alt='avatar' />
              </AvatarBubble>
            </div>
            <div className='w-full pr-2'>
              <Label text={user?.name} size='1.5' semiBold />
              <div className='flex justify-between leading-none'>
                <Label text='Level 99' muted />
                <Label text='9872xp to go' size='0.75' muted />
              </div>
              <ProgressBar value='50' className='mb-1' />
            </div>
          </UserInfo>
        </MainContainer>
      </div>
      <div className='pt-12 pb-3'>
        <div className='grid gap-4 grid-cols-3 px-2'>
          <MetricCard value={'12k'} label='Something' />
          <MetricCard value={'12k'} label='Something' />
          <MetricCard value={'12k'} label='Something' />
        </div>
        <TabContainer className='mt-3'>
          <Tabs
            onClick={() => setCurrentTab('services')}
            title='Serviços'
            active={currentTab === 'services'}
          />
          <Tabs
            onClick={() => setCurrentTab('users')}
            title='Usuários'
            active={currentTab === 'users'}
          />
          <Tabs
            onClick={() => setCurrentTab('settings')}
            title='Configurações'
            active={currentTab === 'settings'}
          />
        </TabContainer>
        <TabContent className='rounded-b-xl px-3 py-4'>
          <TabComponent />
        </TabContent>
      </div>
    </>
  );
}

const MetricCard = ({ value, label }) => (
  <StyledMetricCard className='rounded shadow p-2'>
    <Label text={value} size='1.2' semiBold />
    <Label text={label} size='.875' className='block' />
  </StyledMetricCard>
);

const StyledMetricCard = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;
const UserInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: end;
  color: #fff;
`;
const AvatarBubble = styled.div`
  height: 130px;
  width: 130px;
  overflow: hidden;
  border-radius: 100%;
  transform: translateY(30%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 25px -5px #0000001a, 0 10px 10px -5px #0000000a,
    0 0px 1px 2px #0000001f;
  background: #ff2768;
  background: linear-gradient(to bottom left, #ff2768, #6b2d70);
`;
const MainContainer = styled.div`
  background: #ff2768;
  background: -webkit-linear-gradient(bottom right, #ff2768, #6b2d70);
  background: -moz-linear-gradient(bottom right, #ff2768, #6b2d70);
  background: linear-gradient(to top left, #ff2768, #6b2d70);
  height: 160px;
`;
