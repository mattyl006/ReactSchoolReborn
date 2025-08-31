import React from "react";
import { cn } from "../../../utils/cn";
import { historyItemSchema, InputHistoryItem } from "../types";
import z from "zod";

type FormWizardFieldsProps = {
  fields: {
    state: string;
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    historySetState?: React.Dispatch<React.SetStateAction<InputHistoryItem[]>>;
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (field?.historySetState && e.target.value) {
                const newItem: InputHistoryItem = {
                  field: e.target.value,
                  timestamp: new Date(),
                };
                const result = z.safeParse(historyItemSchema, newItem);
                if (!result.success) {
                  alert("Adding to input history error!");
                } else {
                  field.setState(e.target.value);
                  field.historySetState((prev) => [...prev, newItem]);
                }
              } else {
                field.setState(e.target.value);
              }
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormWizardFields;
