import { baseUrl } from "@/configs/baseUrl";
import axios from "axios";

const api = "http://192.168.1.125:3000";

const login = async (arg: { email: string; password: string }) => {

  const response = await axios.post(api +"/auth/login",arg)
  return response.data
};

const register = async (arg: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(api + "/auth/register", arg);
  return response.data;
};

export const authService = {
  register,
  login
};
