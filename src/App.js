import imgProfile from "./me.png";
import "./App.css";
import { Header } from "./Header/Header";
import { Cover } from "./Cover/Cover";
import { Main } from "./Main/Main";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Main />
    </React.Fragment>
  );
}

export default App;
