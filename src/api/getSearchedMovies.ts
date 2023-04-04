import axios from 'axios';

export async function getSearchedMovies(path: string, apiKey: string, query: string | number) {
  const { data } = await axios.get(`${path}?api_key=${apiKey}&query=${query}`);
  console.log(data);
}
