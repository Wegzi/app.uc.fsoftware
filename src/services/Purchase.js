import axios from 'axios';
export default function Purchase() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/purchase`,
  });
}

Purchase.prototype.purchase = function (owner_id, service_id) {
  return this.api.post('', { owner_id, service_id });
};
Purchase.prototype.getServingService = function (user_id) {
  return this.api.get(`${user_id}/serving`);
};
