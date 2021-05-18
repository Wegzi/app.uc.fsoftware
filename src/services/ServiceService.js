import axios from 'axios';
export default function ServiceService() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/services`,
  });
}

ServiceService.prototype.getServices = function () {
  return this.api.get('');
};
ServiceService.prototype.findService = function (service_id) {
  return this.api.get(`/${service_id}`);
};
ServiceService.prototype.createService = function (service) {
  return this.api.post('', { ...service });
};
ServiceService.prototype.updateService = function (service_id, service) {
  return this.api.put(`/${service_id}`, { ...service });
};
ServiceService.prototype.deleteService = function (service_id) {
  return this.api.delete(`/${service_id}`);
};
