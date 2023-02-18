// To Use the variables in react components
// We can use state in react to create different variables..
import React, { useState } from "react";

export default function Textforms(props) {
  const [text, setText] = useState("");

  // State variables for changing the color of the text area
  const [colorPicker, setcolorPicker] = useState({
    color: "black",
    background: "white",
  }); // This is a default theme of text area...

  const colorChange = () => {
    if (
      colorPicker.color === "black" ||
      colorPicker.color === "yellow" ||
      colorPicker.color === "blue"
    ) {
      setcolorPicker({
        color: "#13ffca",
        background: "#4e54bd",
        border: "2px solid white",
      });
    }
  };
  const colorChange1 = () => {
    if (
      colorPicker.color === "#13ffca" ||
      colorPicker.color === "black" ||
      colorPicker.color === "blue"
    ) {
      setcolorPicker({
        color: "yellow",
        background: "purple",
        border: "2px solid black",
      });
    }
  };
  const colorChange2 = () => {
    if (
      colorPicker.color === "black" ||
      colorPicker.color === "yellow" ||
      colorPicker.color === "#13ffca"
    ) {
      setcolorPicker({
        color: "blue",
        background: "orange",
        border: "2px solid black",
      });
    }
  };

  const changehandler = (e) => {
    setText(e.target.value);
    // console.log("Text change..");
  };
  const uppercasehandler = () => {
    setText(text.toUpperCase());
    console.log("you clicked uppercase button.");
  };

  const lowercasehandler = () => {
    setText(text.toLowerCase());
  };

  const clearhandler = () => {
    let clearText = "";
    setText(clearText);
  };

  const voiceTxt = () => {
    let voice = new SpeechSynthesisUtterance(text);
    let voicewarning = new SpeechSynthesisUtterance(
      "Please Write Something for your text to speech conversion, Thank You."
    );
    voice.pitch = 0.8;
    voice.lang = "en-IN";
    voice.volume = 0.9;
    voice.rate = 0.9;
    let count = 1;
    if (text.length > 0 && count === 1) {
      window.speechSynthesis.speak(voice);
    }
    if (window.speechSynthesis.pause()) {
      window.speechSynthesis.resume();
    } else {
      voicewarning.pitch = 0.8;
      voicewarning.lang = "en-IN";
      voicewarning.volume = 0.9;
      voicewarning.rate = 0.9;
      window.speechSynthesis.speak(voicewarning);
    }
  };

  const pauseSpeech = () => {
    let pause1 = new SpeechSynthesisUtterance(text);
    pause1.pitch = 0.8;
    pause1.lang = "en-US";
    pause1.volume = 0.9;
    pause1.rate = 0.9;
    if (window.speechSynthesis.speaking) {
      speechSynthesis.pause();
    }
  };

  return (
    <div
      className="container my-6 mx-6"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <div className="mb-3">
        <h1
          className="my-2"
          style={{
            color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
          }}
        >
          {props.heading}
        </h1>
        <h6
          style={{
            color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
          }}
        >
          Enter your text here..
        </h6>
        <textarea
          className="form-control"
          rows="7"
          columns="1"
          value={text}
          placeholder="Write Something here..."
          onChange={changehandler}
          // colorPicker here is a object..
          style={colorPicker}
        ></textarea>
        <div>
          <button
            disabled={text.length === 0}
            onClick={uppercasehandler}
            type="button"
            className="btn btn-sm btn-outline-success my-3 mx-2"
          >
            Captailize the word
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            onClick={lowercasehandler}
            className="btn btn-sm btn-outline-danger my-3 mx-2"
          >
            LowerCaseWords
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-sm btn-outline-dark my-3 mx-2"
            onClick={clearhandler}
          >
            Clear Text
          </button>
        </div>

        <div className="row">
          <div>
            <h2
              style={{
                color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
              }}
            >
              For Playing Text to Speech
            </h2>
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-success my-3 mx-2"
              onClick={voiceTxt}
            >
              Play
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-warning my-3 mx-2"
              onClick={pauseSpeech}
            >
              Pause
            </button>
          </div>
        </div>

        <div>
          <h6
            style={{
              color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
            }}
          >
            Word
            {/* Words Words {text.length === 0 ? 0 : text.split(" ").trim().length} */}
            {
              text.split(" ").filter((elem) => {
                return elem.length !== 0;
              }).length
            }
          </h6>
          <h6
            style={{
              color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
            }}
          >
            Character {text.length}
          </h6>
        </div>
        <div>
          <h6
            style={{
              color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
            }}
          >
            Theme Change of Textarea
          </h6>
        </div>
        <div
          className="form-check"
          style={{
            color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
          }}
        >
          <input
            className="form-check-input mx-3"
            type="radio"
            name="flexRadioDefault"
            id="radio-1"
            onClick={colorChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault1"
            // style={{ color: props.mode === "" ? "#13ffca" : "white" }}
          >
            Light Blue
          </label>
        </div>

        <div
          className="form-check"
          style={{ color: props.mode === "dark" ? "purple" : "purple" }}
        >
          <input
            className="form-check-input mx-3"
            type="radio"
            name="flexRadioDefault"
            id="radio-2"
            onClick={colorChange1}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Purple Color
          </label>
        </div>
        <div
          className="form-check"
          style={{ color: props.mode === "dark" ? "orange" : "orange" }}
        >
          <input
            className="form-check-input mx-3"
            type="radio"
            name="flexRadioDefault"
            id="radio-3"
            onClick={colorChange2}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Orange Color
          </label>
        </div>

        <h5
          style={{
            color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
          }}
        >
          Text Preview
        </h5>
        <p
          style={{
            color: props.mode === "dark" ? "rgb(232 140 237)" : "#fa7d7d",
          }}
        >
          {text.length > 0 ? text : "Nothing to show."}
        </p>
      </div>
    </div>
  );
}
