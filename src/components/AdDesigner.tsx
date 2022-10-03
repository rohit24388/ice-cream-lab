import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");

  const [darkButton, setDarkButton] = useState<Boolean>(true);
  const [lightButton, setLightButton] = useState<Boolean>(false);
  function toggleButton() {
    darkButton === true ? setDarkButton(false) : setDarkButton(true);
    lightButton === true ? setLightButton(false) : setLightButton(true);
  }

  return (
    <div style={{ blockSize: "" }}>
      <h2 style={{ fontFamily: "caveat" }}>Ad Designer</h2>
      <div className="Box">
        Vote For
        <br />
        {flavor}
      </div>
      <h4>What to Support</h4>
      <div>
        <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
      </div>
      <h4>Color Theme</h4>
      <div className="colorButtons">
        <button disabled={lightButton === false} onClick={toggleButton}>
          Light
        </button>
        <button disabled={darkButton === false} onClick={toggleButton}>
          Dark
        </button>
      </div>
    </div>
  );
};

export default AdDesigner;
