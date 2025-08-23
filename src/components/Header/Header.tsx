import { ComponentProps } from "react";
import { HeaderType } from "./enums/HeaderType";
import { cn } from "../../utils/cn";

type HeaderProps = {
  type: HeaderType;
  className?: string;
} & ComponentProps<"h3">;

const Header: React.FC<HeaderProps> = (props) => {
  switch (props.type) {
    case HeaderType.H1:
      return (
        <h1 className={cn("text-[32px]", props.className)}>{props.children}</h1>
      );
    case HeaderType.H2:
      return (
        <h2 className={cn("text-[24px]", props.className)}>{props.children}</h2>
      );
    case HeaderType.H3:
      return (
        <h3 className={cn("text-[20px]", props.className)}>{props.children}</h3>
      );
    default:
      return (
        <h2 className={cn("text-[20px]", props.className)}>{props.children}</h2>
      );
  }
};

export default Header;
