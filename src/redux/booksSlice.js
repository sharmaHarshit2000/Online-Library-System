import { createSlice } from "@reduxjs/toolkit";
import { books as mockBooks } from "../utils/mockData.js";

const booksSlice = createSlice({
  name: "books",
  initialState: mockBooks,
  reducers: {
    addBook: (state, action) => {
      return [action.payload, ...state]; 
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
