import { ComponentProps } from "react";

type TextProps = {
  className?: string;
} & ComponentProps<"p">;

const Text: React.FC<TextProps> = (props) => {
  return <p className={props.className}>{props.children}</p>;
};

export default Text;
