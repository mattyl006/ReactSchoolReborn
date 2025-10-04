import React from "react";
import IsLoggedInfo from "../IsLoggedInfo";

type AuthCredentialsProps = { className?: string };

const AuthCredentials: React.FC<AuthCredentialsProps> = (props) => {
  console.log("AuthCredentials rendered");

  return (
    <div className={props.className}>
      <p>Name: Matthew</p>
      <p>Surname: Powerful</p>
      <IsLoggedInfo />
    </div>
  );
};

export default AuthCredentials;
