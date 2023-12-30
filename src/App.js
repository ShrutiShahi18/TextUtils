import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
 const [mode, setmode] = useState("light");
 const [textmode, settextmode] = useState("dark");
 const [text, settext] = useState("Dark");
 const [alert, setalert] = useState(null);

 const showalert = (message, type) => {
  setalert({
   msg: message,
   type: type,
  });
  setTimeout(() => {
   setalert(null);
  }, 2000);
 };

 const togglemode = () => {
  if (mode === "dark") {
   setmode("light");
   settextmode("dark");
   settext("Dark");
   document.body.style.backgroundColor = "#eaebfe";
   showalert("Light mode has been enabled!", "success");
   document.title = "TextUtils (Light Mode)";
  } else {
   setmode("dark");
   settextmode("light");
   settext("Light");
   document.body.style.backgroundColor = "#192734";
   showalert("Dark mode has been enabled!", "success");
   document.title = "TextUtils (Dark Mode)";
  }
 };

 return (
  <>
   <Navbar
    title="TextUtils"
    about="About TextUtils"
    mode={mode}
    togglemode={togglemode}
    textmode={textmode}
    text={text}
   />
   <Alert alert={alert} />
   <div className="container my-3">
    <Textform textmode={textmode} showalert={showalert} />
   </div>
  </>
 );
}

export default App;
