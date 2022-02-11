import "./App.css";
import React from "react";
import { Header } from "./Header/Header";
import { Cover } from "./Cover/Cover";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

import { Contact } from "./Contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Main />
      <Footer />
      <Contact />
    </React.Fragment>
  );
}

export default App;
