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

const editUserProfile = async (arg: {
  name: string;
  email: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const response = await axios.put(api + "/users", arg, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

const getUserTasks = async () => {
  const response = await axios.get(api + "/users/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  return response.data;
};

const getUserRooms = async () => {
  const response = await axios.get(api + "/users/rooms", {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  return response.data;
};

export const userService = {
  getUserProfile,
  editUserProfile,
  getUserTasks,
  getUserRooms
};
