import React from "react";
import Header from "../../Header";
import { HeaderType } from "../../Header/enums/HeaderType";
import Text from "../../Text";

type FormWizardSummaryProps = {
  fields: {
    state: string;
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  className?: string;
};

const FormWizardSummary: React.FC<FormWizardSummaryProps> = (props) => {
  return (
    <section className={props.className}>
      <Header type={HeaderType.H3}>Summary</Header>
      <ol>
        {props.fields.map((field, i) => (
          <li key={`summaryItem-${field.name}-${i}`}>
            <Text>{field.name}:</Text>
            <Text>{field.state}</Text>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default FormWizardSummary;
