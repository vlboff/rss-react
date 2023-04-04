import axios from 'axios';

export async function getMovies(path: string, apiKey: string) {
  const { data } = await axios.get(`${path}?api_key=${apiKey}`);
  console.log(data);
}
