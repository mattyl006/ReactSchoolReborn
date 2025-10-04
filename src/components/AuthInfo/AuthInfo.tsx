import React from "react";
import AuthCredentials from "../AuthCredentials";
import Header from "../Header";
import { HeaderType } from "../Header/enums/HeaderType";
import { cn } from "../../utils/cn";
import { AuthContext } from "../../contexts/AuthContext";

type AuthInfoProps = { className?: string };

const AuthInfo: React.FC<AuthInfoProps> = (props) => {
  const [logged, setIsLogged] = React.useState(false);

  console.log("AuthInfo rendered");

  return (
    <AuthContext.Provider
      value={{
        isLogged: logged,
        toggleIsLogged: () => setIsLogged((value) => !value),
      }}
    >
      <div className={cn(props.className, "flex flex-col gap-4")}>
        <Header type={HeaderType.H2}>Auth Info</Header>
        <AuthCredentials />
      </div>
    </AuthContext.Provider>
  );
};

export default AuthInfo;
