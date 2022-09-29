import { useRegisterQuery } from 'src/queries/register.queries';
import { UseMutationResult } from '@tanstack/react-query';
import React, { useCallback, useState } from 'react';
import { UserCreate } from 'types/user';
type RegisterTypes = [
  string,
  string,
  string,
  string,
  string,
  string,
  boolean,
  boolean,
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  UseMutationResult<any, unknown, UserCreate, unknown>,
];

export const useRegister = (): RegisterTypes => {
  const mutation = useRegisterQuery();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요.');
      setIsEmail(true);
    }
  }, []);

  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요.');
      setIsPassword(false);
    } else {
      setPasswordMessage('안전한 비밀번호에요.');
      setIsPassword(true);
    }
  }, []);

  const onChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setConfirmPassword(passwordConfirmCurrent);
      if (password === passwordConfirmCurrent) {
        setConfirmPasswordMessage('비밀번호를 똑같이 입력했어요.');
        setIsConfirmPassword(true);
      } else {
        setConfirmPasswordMessage('비밀번호가 일치하지 않습니다.');
        setIsConfirmPassword(false);
      }
    },
    [password],
  );

  return [
    email,
    password,
    confirmPassword,
    emailMessage,
    passwordMessage,
    confirmPasswordMessage,
    isEmail,
    isPassword,
    isConfirmPassword,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    mutation,
  ];
};
