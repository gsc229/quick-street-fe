import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  console.log("AXIOS/WA token: ", token)
  return axios.create({
    baseURL: 'https://quickstlabs.herokuapp.com/api/v1.0',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export default axiosWithAuth;