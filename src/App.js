import "./App.css";
// import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textforms from "./components/Textforms";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert";

function App(props) {
  // Common feature for full website to turn on dark mode or light mode.
  const [themeMode, setthemeMode] = useState("light");
  const thememode = () => {
    if (themeMode === "light") {
      setthemeMode("dark");
      document.body.style.backgroundColor = "rgb(4 2 12)";
      setTimeout(() => {      
        alert("Dark Mode is Enabled")
      }, 900);
    } else {
      setthemeMode("light");
      document.body.style.backgroundColor = "white";
      setTimeout(() => {
        alert("Light Mode is Enabled")
      }, 700);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="About Us"
          thememode={thememode}
          mode={themeMode}
        />
        <Routes>
          {/*here we have also provided mode property in textforms so that our Textform component also knows which mode is enabled or if it changed to light or dark mode. */}
          <Route
            exact
            path="/"
            element={
              <Textforms heading="Try Textutils Editors -" mode={themeMode} />
            }
          ></Route>
          <Route exact path="/about" element={<About mode={themeMode} />}></Route>
          <Route element={<Alert />}>

          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
