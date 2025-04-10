import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  name: "appStore",
});

export default appStore;
