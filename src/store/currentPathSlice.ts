import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CurrentPath = {
  currentPath: string;
};

const initialState: CurrentPath = {
  currentPath: '/',
};

const currentPathSlice = createSlice({
  name: 'currentPath',
  initialState,
  reducers: {
    setCurrentPath(state, action: PayloadAction<string>) {
      state.currentPath = action.payload;
    },
  },
});

export const { setCurrentPath } = currentPathSlice.actions;

export default currentPathSlice.reducer;
