import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Peticion } from "./componente/Peticion";
import { Condicion } from "./componente/Condicion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Peticion />
      <Condicion edad={17} />
    </>
  );
}

export default App;
