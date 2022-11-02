interface ProtoCreate {
  email: string;
}

interface ProtoRead extends ProtoCreate {
  id: string;
  email: string;
}

export type { ProtoCreate, ProtoRead };
