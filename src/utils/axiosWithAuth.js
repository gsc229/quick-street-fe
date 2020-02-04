import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://quickstlabs.herokuapp.com/api/v1.0/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;