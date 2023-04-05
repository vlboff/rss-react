import axios from 'axios';

export async function getSearchedMovies(path: string, apiKey: string, query: string | number) {
  const { data } = await axios.get(`${path}?api_key=${apiKey}&language=en-US&query=${query}`);
  return data;
}
