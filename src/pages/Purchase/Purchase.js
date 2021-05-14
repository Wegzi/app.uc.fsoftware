import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Button, GroupButton } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import { Icon, Label } from '../../Components/Typography';

const service = {
  _id: '1',
  title: 'Serviço 1',
  user_name: 'Usuário 1',
  stars: 4,
  price: 100.0,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
    placerat, massa condimentum lacinia fringilla, ex mauris lacinia
    tellus`,
  created_at: new Date(),
};

export default function Purchase() {
  const params = useParams();

  const [step, setStep] = useState(0);

  const [purchase, setPurchase] = useState({
    payment_method: 'bill',
    service_id: null,
  });

  useEffect(() => {
    setPurchase(stPurchase => ({
      ...stPurchase,
      service_id: params.service_id,
    }));
    return () => {};
  }, [params.service_id]);

  return (
    <div className='container-full p-3'>
      <Label text={`Contratar: ${service.title}`} size='1.3' semiBold />

      <PurchaseCard className='p-3 mt-2 rounded shadow'>
        <PaymentMethod
          onCancel={() => setStep(step - 1)}
          onSave={() => setStep(step + 1)}
        />
      </PurchaseCard>
    </div>
  );
}

// function PayerData({ onCancel, onSave }) {
//   return (
//     <>
//       <div className='flex px-2 mb-3 items-center'>
//         <Icon icon='FiUser' size='20' className='mr-2' />
//         <Label text='Dados do contratante' />
//       </div>
//       <TextInput className='mb-3' value='' label='Nome completo' />
//       <TextInput className='mb-3' value='' label='Email' />
//       <TextInput className='mb-3' value='' label='Telefone' />
//       <TextInput className='mb-3' value='' label='CPF/CNPJ' />
//       <div className='flex justify-between mt-3'>
//         <Button
//           text='Cancelar'
//           className='mr-2'
//           type='light'
//           onClick={onCancel}
//         />
//         <Button text='Próximo' onClick={onSave} />
//       </div>
//     </>
//   );
// }

function PaymentMethod({ onCancel, onSave }) {
  const [payment, setPayment] = useState({ payment_method: 'credit_card' });
  return (
    <>
      <div className='flex px-2 mb-3 flex items-center'>
        <Icon icon='FiCreditCard' size='20' className='mr-2' />
        <Label text='Pagamento' />
      </div>
      {/* <Checkbox label='Boleto Bancário' className='mb-3' value={bill} onChange={(ev.check) => setBill}/> */}
      <GroupButton className='mb-3'>
        <OptionButton
          label='Cartão Credito'
          value={payment.payment_method}
          type='credit_card'
          onClick={() =>
            setPayment({ ...payment, payment_method: 'credit_card' })
          }
        />{' '}
        <OptionButton
          label='Cartão Débito'
          value={payment.payment_method}
          type='debit_card'
          onClick={() =>
            setPayment({ ...payment, payment_method: 'debit_card' })
          }
        />
        <OptionButton
          label='Boleto Bancário'
          value={payment.payment_method}
          type='bill'
          onClick={() => setPayment({ ...payment, payment_method: 'bill' })}
        />
      </GroupButton>
      {payment.payment_method === 'bill' ? null : (
        <>
          <TextInput className='mb-3' value='' label='Número do cartão' />
          <TextInput className='mb-3' value='' label='Nome completo' />
          <TextInput className='mb-3' value='' label='Data de expliração' />
          <TextInput className='mb-3' value='' label='CVV' />
        </>
      )}
      <div className='flex justify-between mt-5'>
        <Button
          text='Voltar'
          className='mr-2'
          type='light'
          onClick={onCancel}
        />
        <Button text='Finalizar compra' onClick={onSave} type='success' />
      </div>
    </>
  );
}

const OptionButton = ({ value, type, label, onClick }) => (
  <Button
    text={label}
    icon={value === type ? 'FiCheck' : undefined}
    type={value === type ? 'primary' : 'light'}
    onClick={onClick}
  />
);
const PurchaseCard = styled.div`
  background-color: ${({ theme }) => theme.card.background};
`;