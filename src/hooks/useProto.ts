import React, { useCallback, useState } from 'react';
import { useProtoQuery } from '@src/queries/proto.queires';
import { UseMutationResult } from '@tanstack/react-query';
import { ProtoCreate } from '../../types/proto';

type ProtoTypes = [
  string,
  string,
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  UseMutationResult<any, unknown, ProtoCreate, unknown>,
];

export const useProto = (): ProtoTypes => {
  const mutation = useProtoQuery();
  const [email, setEmail] = useState<string>('');
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [emailMessage, setEmailMessage] = useState<string>('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const protoRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const protoCurrent = e.target.value;
    setEmail(protoCurrent);
    if (!protoRegex.test(protoCurrent)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('올바른 이메일 형식이에요.');
      setIsEmail(true);
    }
  }, []);

  return [email, emailMessage, isEmail, onChangeEmail, mutation];
};
