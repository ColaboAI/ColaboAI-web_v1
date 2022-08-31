import { useRegisterQuery } from 'src/queries/register.queries';
import { UseMutationResult } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { UserCreate } from 'types/user';
type RegisterTypes = [
  RegisterForm,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  UseMutationResult<any, unknown, UserCreate, unknown>,
];

// TODO: Add Password check
type RegisterForm = {
  email: string;
  password: string;
};

export const useRegister = (): RegisterTypes => {
  const mutation = useRegisterQuery();

  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    password: '',
  });

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setRegisterForm({
        ...registerForm,
        [name]: value,
      });
    },
    [registerForm],
  );

  return [registerForm, onChangeForm, mutation];
};
