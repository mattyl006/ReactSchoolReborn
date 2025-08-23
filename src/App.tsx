import "./App.css";
import Header from "./components/Header";
import { HeaderType } from "./components/Header/enums/HeaderType";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Hello world</h1>
      <Logo className="w-[80px] h-[80px]" />
      <Header type={HeaderType.H1}>Header 1</Header>
      <Header type={HeaderType.H2}>Header 2</Header>
    </div>
  );
};

export default App;
