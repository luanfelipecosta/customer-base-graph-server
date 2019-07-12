const axios = require('axios');
const config = require('./config');

const api = axios.create({
	baseURL: config.BASE_URL,
	timeout: 3000,
});

const fetchCustomer = id => api.get(`/customers/${id}`);
const fetchCustomers = () => api.get(`/customers`);
const addCustomer = args => api.post(`/customers`, args);
const deleteCustomer = id => api.delete(`/customers/${id}`);
const editCustomer = (args, id) => api.patch(`/customers/${id}`, args);

module.exports = {
	api,
	fetchCustomer,
	fetchCustomers,
	addCustomer,
	deleteCustomer,
	editCustomer,
};
