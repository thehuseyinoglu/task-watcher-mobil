import { userService } from "@/services/users/userService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string;
  user: any;
}

const initialState: AuthState = {
  token: "",
  user: {},
};

export const getUserProfile = createAsyncThunk("getUserProfile", async () => {
  const response = await userService.getUserProfile();

  return response.data;
});


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: any) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
