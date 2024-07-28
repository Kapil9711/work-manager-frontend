import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import taskReducer from "./task/taskSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
});

export default store;
