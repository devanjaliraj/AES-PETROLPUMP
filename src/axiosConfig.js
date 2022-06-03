import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.108.185.7/nodejs/api",
  // baseURL: "http://15.206.122.110:4000/api/",
  
});

export default instance;
