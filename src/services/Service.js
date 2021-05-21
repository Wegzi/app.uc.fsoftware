import axios from 'axios';
export default function Service() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/services`,
  });
}

Service.prototype.getServices = function () {
  return this.api.get('');
};
Service.prototype.findService = function (service_id) {
  return this.api.get(`/${service_id}`);
};
Service.prototype.createService = function (service) {
  return this.api.post('', { ...service });
};
Service.prototype.updateService = function (service_id, service) {
  return this.api.put(`/${service_id}`, { ...service });
};
Service.prototype.deleteService = function (service_id) {
  return this.api.delete(`/${service_id}`);
};
