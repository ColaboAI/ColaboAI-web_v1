import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { ProtoCreate, ProtoRead } from 'types/proto';
import { postProto } from '@src/api/api';

export function useProtoQuery() {
  const mutation = useMutation<AxiosResponse<ProtoRead>, AxiosError, ProtoCreate, unknown>(postProto, {
    onError: (error: AxiosError) => {
      toast.error(`사전등록에 실패하였습니다: ${error.message}`);
    },
    onSuccess(data) {
      toast.success(`사전등록이 완료되었습니다!: ${data.data.email}`);
    },
  });
  return mutation;
}
