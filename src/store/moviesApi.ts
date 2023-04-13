import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetMovies } from '../interfaces';

interface IGetMoviesParams {
  apiKey: string;
  searchValue: string;
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (build) => ({
    getMovies: build.query<IGetMovies, string>({
      query: (apiKey) => ({
        url: `movie/popular`,
        params: {
          api_key: apiKey,
        },
      }),
    }),
    getSearchedMovies: build.query<IGetMovies, IGetMoviesParams>({
      query: ({ apiKey, searchValue }) => ({
        url: `search/movie`,
        params: {
          api_key: apiKey,
          query: searchValue,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetSearchedMoviesQuery } = moviesApi;
