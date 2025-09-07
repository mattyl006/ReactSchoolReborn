import React, { ComponentPropsWithRef, forwardRef, Ref, useId } from "react";
import { cn } from "../../utils/cn";
import Text from "../Text";

type InputProps = {
  label: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
} & ComponentPropsWithRef<"input">;

const Input = forwardRef(
  (
    { label, error, className, ...rest }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();
    return (
      <div className={cn("flex items-center gap-[6px]", className)}>
        <label htmlFor={id}>{label}:</label>
        <input id={id} ref={ref} {...rest} />
        {error && <Text className="text-red">{error}</Text>}
      </div>
    );
  }
);

export default Input;
