import axios from 'axios';
export default function PurchaseReport() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/purchase`,
  });
}

PurchaseReport.prototype.getReports = function (purchase_id) {
  return this.api.get(`${purchase_id}/report`);
};

PurchaseReport.prototype.sendReport = function (purchase_id, report) {
  return this.api.post(`${purchase_id}/report`, report);
};
