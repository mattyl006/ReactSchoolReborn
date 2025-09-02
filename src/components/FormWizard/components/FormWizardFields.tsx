import React from "react";
import { cn } from "../../../utils/cn";
import { historyItemSchema, InputHistoryItem } from "../types";
import z from "zod";
import Input from "../../Input";

type FormWizardFieldsProps = {
  fields: {
    state: string;
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    historyState?: InputHistoryItem[];
    historySetState?: React.Dispatch<React.SetStateAction<InputHistoryItem[]>>;
  }[];
  className?: string;
};

const FormWizardFields: React.FC<FormWizardFieldsProps> = (props) => {
  return (
    <div className={cn("flex flex-col w-fit", props.className)}>
      {props.fields.map((field, i) => (
        <Input
          key={`field-${field.name}-${i}`}
          className="m-[8px] flex flex-col gap-[8px]"
          label={field.name}
          id={field.name}
          name={field.name}
          value={field.state}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            field.setState(e.target.value);
          }}
          onBlur={(e) => {
            if (
              field?.historySetState &&
              field?.historyState &&
              e.target.value
            ) {
              const newItem: InputHistoryItem = {
                field: e.target.value,
                timestamp: new Date(),
              };
              const result = z.safeParse(historyItemSchema, newItem);
              if (!result.success) {
                alert("Adding to input history error!");
                if (field.historyState?.length) {
                  const lastHistoryItem: string =
                    field.historyState.pop()!.field;
                  field.setState(lastHistoryItem);
                }
              } else {
                field.historySetState((prev) => [...prev, newItem]);
              }
            }
          }}
        />
      ))}
    </div>
  );
};

export default FormWizardFields;
