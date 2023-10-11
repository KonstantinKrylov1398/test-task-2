import axios from "axios";

export const getAll = () =>
  axios.get(`http://localhost:3000/result`).then((response) => response.data);
