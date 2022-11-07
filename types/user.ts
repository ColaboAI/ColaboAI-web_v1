interface UserBase {
  email: string;
}

interface UserCreate extends UserBase {
  password: string;
}

interface UserRead extends UserBase {
  id: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}

export type { UserBase, UserCreate, UserRead };
