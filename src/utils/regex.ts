export const Regex = () => {
  const password = /^(?=.*\d).{6,8}$/;

  return {
    password,
  };
};
