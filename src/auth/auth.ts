export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const fetchToken = () => {
  return localStorage.getItem('token');
};
