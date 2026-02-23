const validaEmail = (email: string): boolean => {
  const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export { validaEmail };