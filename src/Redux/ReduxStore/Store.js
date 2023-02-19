import { configureStore } from "@reduxjs/toolkit";

import activeLinkSlice from "../Slices/activeComponet";

const store = configureStore({
  reducer: {
    active: activeLinkSlice,
  },
});

export default store;
