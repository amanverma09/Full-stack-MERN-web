import axios from "axios";

const api = axios.create({
  baseURL: "https://front-end-wine-xi.vercel.app/api/users",
});

export default api;

// localhost:3000/api/users/67fba2fab7f455d991144b63
