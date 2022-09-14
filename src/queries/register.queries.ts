import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { UserCreate, UserRead } from 'types/user';
import { postUser } from '@src/api/api';

export function useRegisterQuery() {
  const mutation = useMutation<AxiosResponse<UserRead>, AxiosError, UserCreate, unknown>(postUser, {
    onError: (error: AxiosError) => {
      toast.error(`회원가입에 실패하였습니다: ${error.message}`);
    },
    onSuccess(data) {
      toast.success(`회원가입에 성공하였습니다!: ${data.data.email}`);
    },
  });
  return mutation;
}
