import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { Button, GroupButton } from '../../Components/Button';
import { TextInput } from '../../Components/TextInput';
import toast from '../../Components/toast';
import { Icon, Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import PurchaseService from '../../services/Purchase';

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
  const [purchase, setPurchase] = useState({
    payment_method: 'bill',
    service_id: null,
    owner_id: null,
  });
  const { user } = useContext(AppContext);
  const history = useHistory();

  const userId = user?._id;

  useEffect(() => {
    setPurchase(stPurchase => ({
      ...stPurchase,
      service_id: params.service_id,
      owner_id: userId,
    }));
    return () => {};
  }, [params.service_id, userId]);

  async function processPurchase() {
    try {
      const service = new PurchaseService();
      await service.purchase(purchase.owner_id, purchase.service_id);
      history.push('purchase/success');
    } catch (error) {
      if (error?.response?.data[0]) {
        error?.response?.data?.forEach(invalid => {
          toast.error(invalid.message);
        });
      }
    }
  }

  return (
    <div className='container mx-auto md:w-1/2 p-3'>
      <Label text={`Contratar: ${service.title}`} size='1.3' semiBold />

      <PurchaseCard className='p-3 mt-2 rounded shadow'>
        <PaymentMethod
          onCancel={() => history.goBack()}
          onSave={processPurchase}
        />
      </PurchaseCard>
    </div>
  );
}

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
