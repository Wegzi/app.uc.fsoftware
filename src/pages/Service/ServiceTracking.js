import React from 'react';
import styled from 'styled-components';
import { Label } from '../../Components/Typography';

export default function ServiceTracking() {
  return (
    <div className='container mx-auto p-3'>
      <div className='text-center'>
        <Label text='Status do serviço' semiBold size='1.3' />
      </div>
      <ContentBox className='p-3 rounded shadow'>
        <Label text='Atualizações: ' semiBold />
        <UpdateCard className='p-3 rounded'>
          <Label text='Titulo: Lorem ipsum dolor' />
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi ac vulputate ipsum. Etiam sit amet eros turpis.
            Phasellus sit amet imperdiet lacus, at bibendum orci. Nulla
            facilisi. Vestibulum suscipit, elit ac ornare lobortis, neque lectus
            pellentesque nibh, id ultrices arcu libero eget arcu. Donec eget
            feugiat justo. Nunc cursus congue justo, sit amet ornare velit
            dapibus at. Quisque cursus pretium malesuada. Nullam id sem vel nisi
            pretium pharetra. Vivamus ullamcorper, ligula eu scelerisque
            sagittis, orci lectus consectetur leo, at viverra tortor leo ac
            mauris. Maecenas tempor iaculis eros, a tincidunt elit tempus vel.
            Donec ac consequat est. Integer molestie ante a sapien eleifend, id
            ultrices justo scelerisque. Curabitur congue lorem sit amet dolor
            tincidunt, quis egestas neque tempus. Nullam mattis nibh id luctus
            rutrum. Ut eget velit ac sapien efficitur pellentesque sed sit amet
            eros.
          </p>
          <div className='text-right mt-3 '>
            <Label text={new Date().toLocaleString()} size='0.75' muted />
          </div>
        </UpdateCard>
      </ContentBox>
    </div>
  );
}
const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.card.background};
`;
const UpdateCard = styled.div`
  background-color: ${({ theme }) => theme.light};
`;
