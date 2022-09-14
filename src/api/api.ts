import axios from 'axios';
import { AudioTypes } from '../../types/music';
import { UserCreate } from '../../types/user';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

const getMusic = async () => {
  const res = await api.get<AudioTypes[]>('/audio/items');
  return res.data;
};

async function postUser(params: UserCreate) {
  const res = await api.post('/auth/register', params);
  return res;
}

export { getMusic, postUser };
