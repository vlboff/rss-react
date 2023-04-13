import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchValue = {
  searchValue: string;
};

const initialState: SearchValue = {
  searchValue: '',
};

const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
