import { useState } from "react";
import { Footer } from "./components/Footer";
import { Lang } from "./types/Lang";
import { LangSelector } from "./components/LangSelector";
import { HomePage } from "./components/HomePage";
import { LangProvider } from "./components/LangContext";

export const App = () => {

  return (
    <div className="App">
      <LangProvider>
      <header className="header">
        Mate academy
        <LangSelector/>
      </header>

      <main>
        <HomePage/>
      </main>

      <Footer  />
      </LangProvider>
    </div>
  );
};
