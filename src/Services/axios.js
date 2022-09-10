import axios from "axios";
import toast from "../Components/common/toast";
import { baseUrl } from '../constants/const';

const http = axios.create({
  baseURL: baseUrl
});

const errorResponseHandler = (error) => {
  if (
    error.config.hasOwnProperty("errorHandle") &&
    error.config.errorHandle === false
  ) {
    return Promise.reject(error);
  }
  if (error) {
    if(error.response.status === 401){
      window.location.href = '/login'
    }
    toast.error(error.response.message);
  }
};

const onSuccessResponse = (response) => {
//   if (response.data.status) {
    // toast.success(response.data.message);
//   } else {
    // toast.error(response.data.message);
//   }
  return response;
};

http.interceptors.response.use(
  (response) => onSuccessResponse(response),
  (error) => errorResponseHandler(error)
);

export default http;