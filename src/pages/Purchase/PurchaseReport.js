import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Label } from '../../Components/Typography';
import ReportForm from '../Service/ReportForm';
import PurchaseReportService from '../../services/PurchaseReport';
export default function PurchaseReport() {
  const [reports, setReports] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchReports(params.purchase_id);
  }, [params.purchase_id]);

  async function fetchReports(purchase_id) {
    try {
      const service = new PurchaseReportService();
      const { data } = await service.getReports(purchase_id);
      setReports(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleSave(report) {
    setReports(stReport => [...stReport, report]);
  }
  return (
    <div className='container mx-auto p-3'>
      <div className='text-center'>
        <Label text='Status do serviço' semiBold size='1.3' />
      </div>
      <ContentBox className='p-3 rounded shadow'>
        <Label text='Atualizações: ' semiBold />
        {reports.map(report => (
          <UpdateCard key={report._id} className='p-3 rounded mb-3'>
            <Label text={report.title} />
            <p>{report.message}</p>
            <div className='text-right mt-3 '>
              <Label
                text={report.created_at.toLocaleString()}
                size='0.75'
                muted
              />
            </div>
          </UpdateCard>
        ))}
      </ContentBox>
      <ReportForm onSave={handleSave} purchase_id={params.purchase_id} />
    </div>
  );
}
const ContentBox = styled.div`
  background-color: ${({ theme }) => theme.card.background};
`;
const UpdateCard = styled.div`
  background-color: ${({ theme }) => theme.light};
`;
