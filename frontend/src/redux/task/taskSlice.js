import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../services/API";

const initialState = {
  value: [],
  isGetByMonth: false,
  key: false,
};

export const fetchTask = createAsyncThunk(
  "task/fetchTask",
  async ({ endPoint, userId }) => {
    const data = await API.getTasks(endPoint);
    if (data.success) {
      localStorage.setItem(userId + endPoint, JSON.stringify(data.data));
    }
    return data.data;
  }
);

export const createTask = createAsyncThunk("task/createTask", async () => {});

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: function (state, { payload }) {
      state.value = payload;
    },
    setIsGetByMonth: function (state, { payload }) {
      state.isGetByMonth = payload;
    },
    setTaskRefresh: function (state) {
      state.key = !state.key;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state, { payload }) => {
      if (payload && payload?.length) state.value = payload;
      else state.value = [];
    });
  },
});

export const { setTasks, setIsGetByMonth, setTaskRefresh } = taskSlice.actions;

export default taskSlice.reducer;
