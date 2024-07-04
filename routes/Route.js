import axios from "axios";

const API = import.meta.env.VITE_CLERK_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API}`,
  },
});

const Route = {
  Createresume: (data) => axiosClient.post("/resume-users", data),
};

export default Route;
