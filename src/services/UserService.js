import axios from 'axios';
export default function UserService() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/users`,
  });
}

UserService.prototype.login = function (email, password) {
  return this.api.post('/login', { email, password });
};
UserService.prototype.signup = function (user) {
  return this.api.post('', { ...user });
};
UserService.prototype.getUsers = function () {
  return this.api.get('');
};
UserService.prototype.updateUser = function (user_id, user) {
  return this.api.put(`/${user_id}`, { ...user });
};
UserService.prototype.deleteUser = function (user_id) {
  return this.api.delete(`/${user_id}`);
};

UserService.prototype.findUserServices = function (user_id) {
  return this.api.get(`/${user_id}/services`);
};
UserService.prototype.findUserPurchases = function (user_id) {
  return this.api.get(`/${user_id}/purchases`);
};
