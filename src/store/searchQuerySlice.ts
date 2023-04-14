import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchQuery = {
  searchQuery: string;
};

const initialState: SearchQuery = {
  searchQuery: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;

export default searchQuerySlice.reducer;
