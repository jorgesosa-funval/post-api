import axios from 'axios';


export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers:{
    "Content-Type": "Application/json"
  },
  withCredentials: true
});


export default instance