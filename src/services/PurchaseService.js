import axios from 'axios';
export default function PurchaseService() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/purchase`,
  });
}

PurchaseService.prototype.purchase = function (owner_id, service_id) {
  return this.api.post('', { owner_id, service_id });
};
