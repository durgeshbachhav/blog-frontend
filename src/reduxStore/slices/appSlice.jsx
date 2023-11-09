import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utility/AxiosClient";

export const getMyProfile = createAsyncThunk("/myprofile", async (_) => {
  try {
    const response = await axiosClient.get("/user");
    // console.log("myprofile", response.data.result.user);
    return response.data.result.user;
  } catch (error) {
    console.log(error);
  }
});
export const editProfile = createAsyncThunk("myprofile/edit", async (body) => {
  try {
    const response = await axiosClient.put("/user/profile/edit", body);
    console.log("edit response", response.data.result);
    return response.data.result.user;
  } catch (error) {
    console.log(error);
  }
});

const BlogSlice = createSlice({
  name: "app",
  initialState: {
    myprofile: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.myprofile = action.payload;
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.myprofile = action.payload;
      });
  },
});

export default BlogSlice.reducer;
