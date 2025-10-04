import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Button from "../Button";

type IsLoggedInfoProps = { className?: string };

const IsLoggedInfo: React.FC<IsLoggedInfoProps> = (props) => {
  const { isLogged, toggleIsLogged } = useContext(AuthContext);

  console.log("IsLoggedInfo rendered");

  return (
    <div className={props.className}>
      <p>Is user logged? {isLogged ? "YES" : "NO"}</p>
      <Button onClick={toggleIsLogged}>Toggle isLoggedIn</Button>
    </div>
  );
};

export default IsLoggedInfo;
