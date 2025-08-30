import React from "react";
import Header from "../Header";
import { HeaderType } from "../Header/enums/HeaderType";
import Button from "../Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type ComponentsGeneratorProps = {
  className?: string;
};

const modules: Record<string, { default: React.ComponentType<unknown> }> =
  import.meta.glob("../../components/*/*.tsx", { eager: true });
const codes = import.meta.glob("../../components/**/*.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const components: {
  name: string;
  Component: React.ComponentType<unknown>;
  path: string;
}[] = Object.entries(modules).map(([path, mod]) => {
  const name = path.split("/")[1];
  return { name, Component: mod.default, path };
});

const ComponentsGenerator: React.FC<ComponentsGeneratorProps> = (props) => {
  const [selected, setSelected] = React.useState(components[0]);
  const [propsInputValue, setPropsInputValue] = React.useState("");
  const [mappedProps, setMappedProps] = React.useState({});

  console.log(modules);
  console.log(components);

  return (
    <div className={props.className}>
      <Header type={HeaderType.H2} className="text-3xl font-bold text-blue-500">
        Component Generator
      </Header>

      <div className="flex flex-col gap-[16px] w-fit">
        <label htmlFor="selectComponent">Choose component:</label>
        <select
          id="selectComponent"
          name="selectComponent"
          value={selected.name}
          onChange={(e) =>
            setSelected(components.find((c) => c.name === e.target.value)!)
          }
          className="w-fit"
        >
          {components.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-[16px] w-fit">
        <label htmlFor="propsInput">Props for component</label>
        <input
          className="w-fit"
          id="propsInput"
          name="propsInput"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPropsInputValue(e.target.value)
          }
        />
        <Button
          label="Props confirm"
          onClick={() => {
            try {
              const newMappedProps = JSON.parse(propsInputValue);
              setMappedProps(newMappedProps);
            } catch (err) {
              alert(err);
            }
          }}
        >
          Props confirm
        </Button>
      </div>

      <section className="flex flex-col gap-[20px]">
        <Header type={HeaderType.H3}>Component {selected.name}</Header>
        {<selected.Component {...mappedProps} />}
      </section>

      <section className="flex flex-col gap-[20px]">
        <Header type={HeaderType.H3}>Source Code</Header>
        <SyntaxHighlighter>{codes[selected.path]}</SyntaxHighlighter>
      </section>
    </div>
  );
};

export default ComponentsGenerator;
