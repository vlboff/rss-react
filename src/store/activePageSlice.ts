import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { namePage } from '../interfaces';

type ActivePage = {
  activePage: string;
};

const initialState: ActivePage = {
  activePage: namePage.home,
};

const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    setActivePage(state, action: PayloadAction<string>) {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;

export default activePageSlice.reducer;
