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
      <Header className="m-[0_0_16px_0]" type={HeaderType.H3}>
        Summary
      </Header>
      <ol className="flex flex-col gap-[8px] m-[0_0_8px_0]">
        {props.fields.map((field, i) => (
          <li className="flex gap-[6px]" key={`summaryItem-${field.name}-${i}`}>
            <Text className="font-bold">{field.name}:</Text>
            <Text>{field.state}</Text>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default FormWizardSummary;
