import { useState } from "react";
import "./styles.css";
import SvgColorChanger from "./components/Svg-Color-Changer";

const App = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [colorForSVG, setColorForSVG] = useState({fill: 'yellow', stroke: "black"})

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(selectedFile);
    setColorForSVG({fill:'red',stroke:'blue'});
  };

  return (
    <div className="App">
        <h2>Upload SVG File</h2>
        <input type="file" name="file" onChange={changeHandler} />
        <SvgColorChanger
            fill = {colorForSVG.fill}
            stroke = {colorForSVG.stroke}
        />
      <div>

      </div>
    </div>
  );
};

export default App;
