import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance.js";

const initialState = {
  isLoggedIn: localStorage.getItem("isLogged") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("user/register", data);
    toast.promise(res, {
      loading: "Wait! creating your account✨",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create account✨",
    });

    return (await res).data;
  } catch (error) {
    const message =
      error?.response?.data?.message || "An unknown error occurred";
    toast.error(message, {
      position: "top-right",
    });
  }
});

export const login = createAsyncThunk("/auth/login", async (data) => {
  try {
    const res = axiosInstance.post("user/login", data);
    toast.promise(res, {
      loading: "Wait! authentication in progress..✨",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to login✨",
    });

    return (await res).data;
  } catch (error) {
    const message =
      error?.response?.data?.message || "An unknown error occurred";
    toast.error(message, {
      position: "top-right",
    });
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", action?.payload?.user?.role);
      state.isLoggedIn = true;
      state.data = action?.payload?.user;
      state.role = action?.payload?.user?.role;
    });
  },
});

// export const {}=authSlice.actions;
export default authSlice.reducer;
