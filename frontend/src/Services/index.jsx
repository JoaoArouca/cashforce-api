import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const get = async (route) => {
  const url = `${BASE_URL}/${route}`;

  return axios.get(url).then((result) => result.data);
};

const getById = async (route, id) => {
  const url = `${BASE_URL}/${route}/${id}`;

  return axios.get(url).then((result) => result.data);
};

export { get, getById };
