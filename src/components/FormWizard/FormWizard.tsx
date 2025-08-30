import React from "react";
import FormWizardFields from "./components/FormWizardFields";
import FormWizardSummary from "./components/FormWizardSummary";
import Button from "../Button";

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

  const renderStage = () => {
    switch (stage) {
      case FormWizardStage.First:
        return (
          <>
            <FormWizardFields
              fields={[
                { state: name, setState: setName, name: "name" },
                { state: surname, setState: setSurname, name: "surname" },
              ]}
            />
            <Button
              onClick={() => setStage(FormWizardStage.Second)}
              label="Next stage"
            />
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
              label="Previous stage"
            />
            <Button
              onClick={() => setStage(FormWizardStage.Third)}
              label="Next stage"
            />
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
              label="Previous stage"
            />
            <Button
              onClick={() => console.log([name, surname, birthday, hobby])}
              label="Confirm"
            />
          </>
        );
    }
  };

  return <form className={props.className}>{renderStage()}</form>;
};

export default FormWizard;
