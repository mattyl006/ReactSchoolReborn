import React from "react";
import AuthCredentials from "../AuthCredentials";
import Header from "../Header";
import { HeaderType } from "../Header/enums/HeaderType";
import { cn } from "../../utils/cn";
import { AuthContextProvider } from "../../contexts/AuthContextProvider";

type AuthInfoProps = { className?: string };

const AuthInfo: React.FC<AuthInfoProps> = (props) => {
  console.log("AuthInfo rendered");

  return (
    <AuthContextProvider>
      <div className={cn(props.className, "flex flex-col gap-4")}>
        <Header type={HeaderType.H2}>Auth Info</Header>
        <AuthCredentials />
      </div>
    </AuthContextProvider>
  );
};

export default AuthInfo;
