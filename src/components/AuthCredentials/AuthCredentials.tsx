import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

type AuthCredentialsProps = { className?: string };

const AuthCredentials: React.FC<AuthCredentialsProps> = (props) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <div className={props.className}>
      <p>Is user logged? {isLogged ? "YES" : "NO"}</p>
    </div>
  );
};

export default AuthCredentials;
