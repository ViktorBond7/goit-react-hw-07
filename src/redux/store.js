import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactsSlice";
import { filterReduser } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filters: filterReduser,
  },
});
