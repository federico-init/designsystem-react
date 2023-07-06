import { useState } from "react";
import "./App.css";
import "./App.scss";

import { InputText } from "./components/form";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <>
      {/* input Text enabled con gestione active */}
      <InputText
        id={"labelEnabled"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"active"}
        handleChange={setInputText}
      />
      {/* // input Text error */}
      <InputText
        id={"labelError"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"error"}
        errorMessage={"Input error!"}
        handleChange={setInputText}
      />
      {/* // input Text disabled */}
      <InputText
        id={"labelDisabled"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"disabled"}
        handleChange={setInputText}
      />
    </>
  );
}

export default App;
