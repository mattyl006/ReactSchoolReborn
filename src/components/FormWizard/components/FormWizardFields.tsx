import React from "react";

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
    <div className={props.className}>
      {props.fields.map((field, i) => (
        <React.Fragment key={`field-${field.name}-${i}`}>
          <label htmlFor={field.name}>{field.name}:</label>
          <input
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
