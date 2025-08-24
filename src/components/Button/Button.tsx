import React, { ComponentProps } from "react";
import { ButtonSize } from "./ButtonSize";
import { cn } from "../../utils/cn";

enum ButtonMode {
  Primary = "text-white bg-[#1ea7fd]",
  Secondary = "bg-transparent text-[#333] shadow-[rgba(0,_0,_0,_0.15)_0px_0px_0px_1px_inset]",
}

type ButtonProps = {
  backgroundColor?: string;
  size?: ButtonSize;
  mode?: ButtonMode;
  label: string;
} & ComponentProps<"button">;

/** Primary UI component for user interaction */
const Button: React.FC<ButtonProps> = ({
  size = ButtonSize.MEDIUM,
  mode = ButtonMode.Primary,
  className,
  disabled,
  label,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      type="button"
      onClick={(e) => (props.onClick && !disabled ? props.onClick(e) : null)}
      className={cn(
        `inline-block cursor-pointer border-0 rounded-[3em] font-bold leading-1 w-fit
         ${size} ${mode}`,
        className,
        { "hover:transparent bg-slate-400 cursor-auto": disabled }
      )}
    >
      {label}
    </button>
  );
};

export default Button;
