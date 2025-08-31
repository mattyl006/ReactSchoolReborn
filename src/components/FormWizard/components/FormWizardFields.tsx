import React from "react";
import { cn } from "../../../utils/cn";

type FormWizardFieldsProps = {
  fields: {
    state: string;
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  className?: string;
};

const FormWizardFields: React.FC<FormWizardFieldsProps> = (props) => {
  return (
    <div className={cn("flex flex-col w-fit", props.className)}>
      {props.fields.map((field, i) => (
        <React.Fragment key={`field-${field.name}-${i}`}>
          <label className="m-[8px]" htmlFor={field.name}>
            {field.name}:
          </label>
          <input
            className="m-[8px]"
            id={field.name}
            name={field.name}
            value={field.state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              field.setState(e.target.value)
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormWizardFields;
