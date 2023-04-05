import axios from 'axios';

export async function getMovies(path: string, apiKey: string) {
  const { data } = await axios.get(`${path}?api_key=${apiKey}&language=en-US`);
  return data;
}
