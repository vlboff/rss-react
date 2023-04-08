import axios from 'axios';

export async function getMoviesDetails(path: string, id: number, apiKey: string) {
  const { data } = await axios.get(`${path}${id}?api_key=${apiKey}&language=en-US`);
  return data;
}
