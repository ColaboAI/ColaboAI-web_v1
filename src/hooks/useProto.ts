import React, { useCallback, useState } from 'react';

type ProtoTypes = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export const useProto = (): ProtoTypes => {
  const [email, setEmail] = useState<string>('');

  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
  }, []);

  return [email, onChangeEmail];
};
