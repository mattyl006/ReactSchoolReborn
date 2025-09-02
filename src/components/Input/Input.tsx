import React, { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";
import { cn } from "../../utils/cn";

type InputProps = {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef(
  ({ label, className, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className={cn("flex items-center gap-[6px]", className)}>
        <label htmlFor={id}>{label}:</label>
        <input id={id} ref={ref} {...rest} />
      </div>
    );
  }
);

export default Input;
