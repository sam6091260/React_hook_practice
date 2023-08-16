import { useState } from "react";

function NewApp() {
  const [num, setNum] = useState(0);

  const handleB = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={handleB}>click {num}</button>

      <hr style={{ width: "222px" }} />

      <label htmlFor="id">label</label>
      <input type="text" id="id" />

      <label htmlFor="check">check</label>
      <input type="checkbox" id="check" />
    </div>
  );
}

export default NewApp;
