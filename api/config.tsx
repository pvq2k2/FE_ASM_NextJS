import axios from "axios";

const instance = axios.create({
  baseURL:'https://be-asm-nextjs.herokuapp.com/api'
})
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default instance