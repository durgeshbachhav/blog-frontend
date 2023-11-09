import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utility/AxiosClient";

export const getAllBlogs = createAsyncThunk("blog/getAllBlogs", async () => {
  try {
    const response = await axiosClient.get("/blog/all");
    return response.data.result.blogs;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to let the calling code handle it
  }
});

export const getBlog = createAsyncThunk("blog/getBlog", async (blogId) => {
  try {
    const response = await axiosClient.get(`/blog/${blogId}`);
    console.log("Response:", response);
    return response.data.result.blog;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to let the calling code handle it
  }
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    singleBlog: null, // Use null instead of an empty array for singleBlog
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.singleBlog = action.payload;
      });
  },
});

export default blogSlice.reducer;
