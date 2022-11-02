import { useRef, useState, useCallback } from "react";
import "./styles.css";
import reactCSS from "reactcss";
import SvgColorChanger from "./components/Svg-Color-Changer";
import ColorPickerComponent from "./components/Color-Picker-Component";
import { SketchPicker } from "react-color";

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
}

const App = () => {
  const [selectedPickerColorFill, setSelectedPickerColorFill] = useState({
    color: { r: "241", g: "112", b: "19", a: "1" },
  });
  const [selectedPickerColorStroke, setSelectedPickerColorStroke] = useState({
    color: { r: "241", g: "112", b: "19", a: "1" },
  });
  const [selectedFile, setSelectedFile] = useState();
  const [colorForSVG, setColorForSVG] = useState({
    fill: `rgba(${selectedPickerColorFill.color.r}, ${selectedPickerColorFill.color.g}, ${selectedPickerColorFill.color.b}, ${selectedPickerColorFill.color.a})`,
    stroke: `rgba(${selectedPickerColorStroke.color.r}, ${selectedPickerColorStroke.color.g}, ${selectedPickerColorStroke.color.b}, ${selectedPickerColorStroke.color.a})`,
  });

  const svgRef = useRef();

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `myimage.svg`);
  }, []);

  const changeColorForStroke = (color) => {
    console.log("called on change colo");
    console.log(colorForSVG);
    setSelectedPickerColorStroke({ color: color.rgb });
    setColorForSVG({
      ...colorForSVG,
      stroke: `rgba(${selectedPickerColorStroke.color.r}, ${selectedPickerColorStroke.color.g}, ${selectedPickerColorStroke.color.b}, ${selectedPickerColorStroke.color.a})`,
    });
  };

  const changeColorForFill = (color) => {
    console.log("called on change colo");
    console.log(colorForSVG);
    setSelectedPickerColorFill({ color: color.rgb });
    setColorForSVG({
      ...colorForSVG,
      fill: `rgba(${selectedPickerColorFill.color.r}, ${selectedPickerColorFill.color.g}, ${selectedPickerColorFill.color.b}, ${selectedPickerColorFill.color.a})`,
    });
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  return (
    <div className="App">
      <h2>Upload SVG File</h2>
      <input type="file" name="file" onChange={changeHandler} />
      <div ref={svgRef}>
        <SvgColorChanger fill={colorForSVG.fill} stroke={colorForSVG.stroke} />
      </div>
      <div>
        <ColorPickerComponent
          title="Stroke"
          changeColor={changeColorForStroke}
          selectedPickerColor={selectedPickerColorStroke}
        />

        <ColorPickerComponent
          title="Fill"
          changeColor={changeColorForFill}
          selectedPickerColor={selectedPickerColorFill}
        />
      </div>
      <div>
        <button onClick={downloadSVG}>Download</button>
      </div>
    </div>
  );
};

export default App;
