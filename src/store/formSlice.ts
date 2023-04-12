import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IForm } from '../interfaces';

type FormsArray = {
  formsArray: IForm[];
};

const initialState: FormsArray = {
  formsArray: [],
};

const formSlice = createSlice({
  name: 'formsArray',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IForm>) {
      state.formsArray.push(action.payload);
    },
  },
});

export const { addCard } = formSlice.actions;

export default formSlice.reducer;
