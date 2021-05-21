import axios from 'axios';
export default function User() {
  this.api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/users`,
  });
}

User.prototype.login = function (email, password) {
  return this.api.post('/login', { email, password });
};
User.prototype.signup = function (user) {
  return this.api.post('', { ...user });
};
User.prototype.getUsers = function () {
  return this.api.get('');
};
User.prototype.updateUser = function (user_id, user) {
  return this.api.put(`/${user_id}`, { ...user });
};
User.prototype.deleteUser = function (user_id) {
  return this.api.delete(`/${user_id}`);
};

User.prototype.findUserServices = function (user_id) {
  return this.api.get(`/${user_id}/services`);
};
User.prototype.findUserPurchases = function (user_id) {
  return this.api.get(`/${user_id}/purchases`);
};
