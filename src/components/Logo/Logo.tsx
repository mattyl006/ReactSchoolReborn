import { ComponentProps } from "react";
import reactIco from "../../assets/logo.png";

type LogoProps = {
  className?: string;
} & ComponentProps<"img">;

const Logo: React.FC<LogoProps> = (props) => {
  return <img className={props.className} src={reactIco} />;
};

export default Logo;
