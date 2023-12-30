import React, { useState } from "react";

export default function Textform(props) {
 const [text, setText] = useState("");

 const cleartext = () => {
  setText("");
 };

 const handleUpClick = () => {
  console.log("Uppercase was clicked " + text);
  let newtext = text.toUpperCase();
  setText(newtext);
 };

 const copytext = () => {
  console.log("Text copied to clipboard!!");
  var text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showalert("Copied to Clipboard!", "success");
 };

 const spaceclear = () => {
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "));
 };

 const handleLoClick = () => {
  console.log("Lowercase was clicked " + text);
  let newtext = text.toLowerCase();
  setText(newtext);
 };

 const handleOnChange = (event) => {
  console.log("On Change");
  setText(event.target.value);
 };

 return (
  <div>
   <div className="mb-3">
    <label htmlFor="mybox" className={`form-label text-${props.textmode}`}>
     <h1 className="heading">Enter your text below:</h1>
    </label>
    <textarea
     className="form-control"
     id="mybox"
     value={text}
     rows="7"
     onChange={handleOnChange}
     style={{
      backgroundColor: props.textmode === "light" ? "#eaebfe" : "#212529db",
      color: props.textmode === "light" ? "black" : "white",
     }}
    ></textarea>
    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
     Convert To Uppercase
    </button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>
     Convert To Lowercase
    </button>
    <button className="btn btn-primary my-3 mx-2" onClick={copytext}>
     Copy Text to Clipboard
    </button>
    <button className="btn btn-primary my-3 mx-2" onClick={spaceclear}>
     Remove Extra Spaces
    </button>
    <button className="btn btn-primary my-3 mx-2" onClick={cleartext}>
     Clear Text
    </button>
   </div>
   <div className={`container text-${props.textmode}`}>
    <h2 className="heading">Your text summary:</h2>
    <div className="text-bg-secondary p-3">
     <p>
      {text.split(" ").length} word(s) and {text.length} character(s).
     </p>
     <p>{0.008 * text.split(" ").length} minute(s) of reading.</p>
     <p>{text.split(/[.?!]/g).filter(Boolean).length} sentence(s).</p>
    </div>
    <h3 className="heading">PREVIEW:</h3>
    <p className="text-bg-secondary p-3 text-light">
     {text.length > 0 ? text : "Enter some text to preview."}
    </p>
   </div>
  </div>
 );
}
