import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import { moviesApi } from './moviesApi';
import searchValueSlice from './searchValueSlice';
import searchQuerySlice from './searchQuerySlice';
import currentPathSlice from './currentPathSlice';
import activePageSlice from './activePageSlice';

const store = configureStore({
  reducer: {
    forms: formSlice,
    searchValue: searchValueSlice,
    searchQuery: searchQuerySlice,
    currentPath: currentPathSlice,
    activePage: activePageSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
