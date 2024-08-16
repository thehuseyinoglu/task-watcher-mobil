import { baseUrl } from "@/configs/baseUrl";
import axios from "axios";

const login = async (arg: { email: string; password: string }) => {};

const register = async (arg: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(baseUrl.url + "/auth/register", arg);
console.log(baseUrl.url)
  return response.data;
};

export const authService = {
  register,
};
