import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/footer-logo.png';
export function Footer() {
  return (
    <FooterContainer style={{ height: '120px' }}>
      <div className='flex h-full px-5 py-3'>
        <LogoContainer className='p-3 mr-10 rounded'>
          <img src={logo} alt='' />
        </LogoContainer>
        <div>footer</div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.light};
`;
const LogoContainer = styled.div`
  background-color: ${({ theme }) => theme.primary}75;
  width: 65px;
  height: 65px;
  align-self: center;
`;
