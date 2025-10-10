const useAuth = () => {
  const [logged, setIsLogged] = React.useState(false);
  const toggleIsLogged = () => setIsLogged((v) => !v);
  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);

  return { logged, toggleIsLogged, logIn, logOut };
};

export default useAuth;
