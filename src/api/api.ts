import axios from 'axios';
import { AudioTypes } from '../../types/music';
import { UserBase, UserCreate } from '../../types/user';
import FormData from 'form-data';

const api = axios.create({
  baseURL: 'https://api.colabo.ml:8000',
});

const getMusic = async () => {
  const res = await api.get<AudioTypes[]>('/audio/items');
  return res.data;
};

const postLogin = async (username: string, password: string) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  const res = await api.post('/auth/jwt/login', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res);
  return res;
};

async function postUser(params: UserCreate) {
  const res = await api.post('/auth/register', params);
  return res;
}

async function postProto(params: UserBase) {
  const res = await api.post('/audio/proto', params);
  return res;
}

export { getMusic, postLogin, postUser, postProto };
