import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utility/AxiosClient";

export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (userId) => {
    try {
      const response = await axiosClient.get(`/user/${userId}`);
      return response.data.result.user;
    } catch (error) {
      console.log(error);
    }
  }
);

const BlogSlice = createSlice({
  name: "user",
  initialState: {
    userprofile: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userprofile = action.payload;
    })
  },
});

export default BlogSlice.reducer;
