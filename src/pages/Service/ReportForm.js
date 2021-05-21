import React, { useContext, useEffect, useState } from 'react';
import { TextArea } from '../../Components/input/TextArea';
import CollapseForm from '../../Components/layout/CollapseForm';
import { TextInput } from '../../Components/TextInput';
import { Icon, Label } from '../../Components/Typography';
import { AppContext } from '../../context/AppState';
import PurchaseReport from '../../services/PurchaseReport';

const initialState = { title: '', message: '' };
export default function ReportForm({ onSave, purchase_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [report, setReport] = useState({ ...initialState });
  const { user } = useContext(AppContext);

  useEffect(() => {
    setReport(stService => ({
      ...stService,
      owner_id: user?._id,
      purchase_id,
    }));
  }, [purchase_id, user]);

  async function handleSave() {
    try {
      const service = new PurchaseReport();
      const { data } = await service.sendReport(purchase_id, report);

      setIsOpen(false);
      const timeout = setTimeout(() => {
        onSave({ ...data, created_at: new Date() });
        setReport(stReport => ({ ...stReport, ...initialState }));
      }, 400);
      timeout();
      clearTimeout(timeout);
    } catch (error) {}
  }

  function handleChange({ target: { name, value } }) {
    setReport(stService => ({ ...stService, [name]: value }));
  }
  console.log(report);
  return (
    <CollapseForm isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={handleSave}>
      <div className='flex items-center mb-3'>
        <Icon icon='FiZap' size='18' className='mr-2' />
        <Label bold size='1.3' text='Adicionar relatório' />
      </div>
      <div>
        <TextInput
          name='title'
          onChange={handleChange}
          value={report.title}
          placeholder='Título'
          label='Título'
          className='mb-2'
        />
        <TextArea
          name='message'
          onChange={handleChange}
          value={report.message}
          placeholder='Mensage'
          label='Mensage'
        />
      </div>
    </CollapseForm>
  );
}
