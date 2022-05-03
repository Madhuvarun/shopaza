import axios from "axios";

const Axios = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:3001",
});

export default Axios;
