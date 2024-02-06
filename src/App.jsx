import { useState } from "react";
import "./index.css";
import "./App.css";

import {
  Navbar,
  Footer,
  About,
  Header,
  Contacts,
  Projects,
} from "./components";

function App() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-lightSecondary">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
