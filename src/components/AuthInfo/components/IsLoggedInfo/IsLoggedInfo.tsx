import React from "react";
import Button from "../../../Button";
import useAuthContext from "../../../../hooks/useAuthContext";

type IsLoggedInfoProps = { className?: string };

const IsLoggedInfo: React.FC<IsLoggedInfoProps> = (props) => {
  const { isLogged, toggleIsLogged, logIn, logOut } = useAuthContext();

  console.log("IsLoggedInfo rendered");

  return (
    <div className={props.className}>
      <p>Is user logged? {isLogged ? "YES" : "NO"}</p>
      <Button onClick={toggleIsLogged}>Toggle isLoggedIn</Button>
      <Button onClick={logIn}>Log In</Button>
      <Button onClick={logOut}>Log Out</Button>
    </div>
  );
};

export default IsLoggedInfo;
