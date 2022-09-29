import React, { useCallback, useState } from 'react';
import { postLogin } from '@src/api/api';
import { setToken } from '@src/auth/auth';
import { useRouter } from 'next/router';
import { AxiosError, AxiosResponse } from 'axios';
import { Token } from '../../types/token';
import toast from 'react-hot-toast';

type LoginTypes = [
  string,
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

export const useLogin = (): LoginTypes => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const usernameCurrent = e.target.value;
    setUsername(usernameCurrent);
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
  }, []);

  const login = () => {
    if (username == '' && password == '') {
      return;
    } else
      postLogin(username, password)
        .then(function (response: AxiosResponse<Token>) {
          setToken(response.data.access_token);
          router.push('/');
        })
        .catch(function (error: AxiosError) {
          console.log(error);
          toast.error(`로그인에 실패하였습니다: ${error.message}`);
        });
  };
  return [username, password, onChangeUsername, onChangePassword, login];
};
