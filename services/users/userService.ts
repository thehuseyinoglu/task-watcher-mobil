import { baseUrl } from "@/configs/baseUrl";
import axios from "axios";

import * as SecureStore from "expo-secure-store";

const token = SecureStore.getItem("token");

const api = "http://192.168.1.125:3000";

const getUserProfile = async () => {
  const response = await axios.get(api + "/users/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const userService = {
  getUserProfile,
};
