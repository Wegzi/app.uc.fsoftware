import axios from 'axios';
export default function ServiceMessage() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/service`,
  });
}

ServiceMessage.prototype.createMessage = function (service_id, message) {
  return this.api.post(`/${service_id}/message`, { ...message });
};
ServiceMessage.prototype.getServiceMessages = function (service_id) {
  return this.api.get(`/${service_id}/message`);
};
