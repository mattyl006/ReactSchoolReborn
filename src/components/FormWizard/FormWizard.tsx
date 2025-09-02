import React from "react";
import FormWizardFields from "./components/FormWizardFields";
import FormWizardSummary from "./components/FormWizardSummary";
import Button from "../Button";
import { cn } from "../../utils/cn";
import { historyItemSchema, InputHistoryItem } from "./types";
import z from "zod";

type FormWizardProps = { className?: string };

enum FormWizardStage {
  First = 1,
  Second = 2,
  Third = 3,
}

const FormWizard: React.FC<FormWizardProps> = (props) => {
  const [stage, setStage] = React.useState(FormWizardStage.First);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");

  const [birthday, setBirthday] = React.useState("");
  const [hobby, setHobby] = React.useState("");

  const [nameHistory, setNameHistory] = React.useState<InputHistoryItem[]>([]);

  const buttonsMargin: string = "m-[16px_16px_16px_0]";

  const renderStage = () => {
    switch (stage) {
      case FormWizardStage.First:
        return (
          <>
            <FormWizardFields
              fields={[
                {
                  state: name,
                  setState: setName,
                  name: "name",
                  historyState: nameHistory,
                  historySetState: setNameHistory,
                },
                { state: surname, setState: setSurname, name: "surname" },
              ]}
            />
            <Button
              onClick={() => setStage(FormWizardStage.Second)}
              className={buttonsMargin}
            >
              Next stage
            </Button>
          </>
        );
      case FormWizardStage.Second:
        return (
          <>
            <FormWizardFields
              fields={[
                { state: birthday, setState: setBirthday, name: "birthday" },
                { state: hobby, setState: setHobby, name: "hobby" },
              ]}
            />
            <Button
              onClick={() => setStage(FormWizardStage.First)}
              className={buttonsMargin}
            >
              Previous stage
            </Button>
            <Button
              onClick={() => setStage(FormWizardStage.Third)}
              className={buttonsMargin}
            >
              Next stage
            </Button>
          </>
        );
      case FormWizardStage.Third:
        return (
          <>
            <FormWizardSummary
              fields={[
                { state: name, setState: setName, name: "name" },
                { state: surname, setState: setSurname, name: "surname" },
                { state: birthday, setState: setBirthday, name: "birthday" },
                { state: hobby, setState: setHobby, name: "hobby" },
              ]}
            />
            <Button
              onClick={() => setStage(FormWizardStage.Second)}
              className={buttonsMargin}
            >
              Previous stage
            </Button>
            <Button type="submit" className={buttonsMargin}>
              Confirm
            </Button>
          </>
        );
    }
  };

  return (
    <form
      onSubmit={() => console.log([name, surname, birthday, hobby])}
      className={cn(
        "p-[4px] flex flex-col text-wrap max-w-[1000px]",
        props.className
      )}
    >
      {renderStage()}
      {z.safeParse(z.array(historyItemSchema), nameHistory).success
        ? nameHistory.map(
            (i) => `(${i.field}, ${i.timestamp.toLocaleString()}) `
          )
        : null}
    </form>
  );
};

export default FormWizard;
