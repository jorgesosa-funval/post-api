import axios from 'axios';


export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers:{
    "Content-Type": "Application/json"
  },
  withCredentials: true
});


instance.interceptors.response.use( (response) => { 
    return response;
  }, 
  (error) =>{
    if(error.status === 401){
      window.location.href="/login"
    }
    return Promise.reject(error);
  });


export default instance