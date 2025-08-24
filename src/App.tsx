import "./App.css";
import ComponentsGenerator from "./components/ComponentsGenerator";

const App = () => {
  return (
    <div className="flex justify-center pt-[32px]">
      <ComponentsGenerator className="flex flex-col gap-[32px] p-[16px] w-fit" />
    </div>
  );
};

export default App;
