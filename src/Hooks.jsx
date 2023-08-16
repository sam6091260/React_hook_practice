import { useState } from "react";

function Hooks() {
  const [hooks, setHooks] = useState(1);
  const [text, setText] = useState("shane");

  function handleOnClick() {
    setHooks(hooks + 1);
    console.log(hooks + 1);
  }

  function handleOnChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      Hooks
      <button onClick={handleOnClick}>{hooks}</button>
      {text}
      <input type="text" value={text} onChange={handleOnChange} />
    </div>
  );
}

export default Hooks;
