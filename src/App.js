import React, { useCallback, useState } from "react";
import { ChildArea } from "./components/ChildArea";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeInput = (e) => {
    setText(e.target.value);
  };
  const onClickShow = () => {
    setOpen(!open);
  };
  const onclickClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div className="App">
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickShow}>表示</button>
      <br />
      <br />
      <ChildArea open={open} onclickClose={onclickClose} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
