import axios from "axios";

const api = axios.create({
  baseURL: "http://dev.4all.com:3050/"
});

export default api;