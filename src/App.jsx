// import React hooks
import { useState } from "react";

// import style
import "./App.css";
import "./App.scss";

// import components
import {
  InputPassword,
  InputText,
  InputSelect,
  InputCheckbox,
  InputRadio,
} from "./components/form";

import Header from "./components/landingPage/header";
import Hero from "./components/landingPage/hero";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return (
    <>
      <Header />
      {/* <Hero /> */}

      <br />
      <br />
      {/* input Text enabled con gestione active */}
      <InputText
        id={"labelEnabled"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"active"}
        handleChange={setInputText}
      />
      {/* input Text error */}
      <InputText
        id={"labelError"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"error"}
        errorMessage={"Input error!"}
        handleChange={setInputText}
      />
      {/* input Text disabled */}
      <InputText
        id={"labelDisabled"}
        name="label"
        placeholder="Placeholder"
        label="Label"
        state={"disabled"}
        handleChange={setInputText}
      />

      {/* input Password */}
      <InputPassword
        id={"password"}
        name="password"
        placeholder="Placeholder"
        label="Label"
        handleChange={setInputPassword}
        setInputPassword={setInputPassword}
      />

      {/* <InputSelect /> */}

      {/* input checkbox */}
      <InputCheckbox name="checkbox" label="Checkbox" />
      {/* input radio */}
      <InputRadio name="radio" label="Radio" />
    </>
  );
}

export default App;
