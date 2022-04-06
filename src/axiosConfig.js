import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.108.185.7/nodejs/api",
  
});

export default instance;
