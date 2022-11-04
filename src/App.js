import { useRef, useState, useCallback, useEffect } from "react";
import "./styles.css";
import reactCSS from "reactcss";
import SvgColorChanger from "./components/Svg-Color-Changer";
import ColorPickerComponent from "./components/Color-Picker-Component";
import { SketchPicker } from "react-color";
import { SvgLoader, SvgProxy } from "react-svgmt";

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
    color: { r: "255", g: "255", b: "255", a: "1" },
  });
  const [selectedPickerColorStroke, setSelectedPickerColorStroke] = useState({
    color: { r: "255", g: "0", b: "0", a: "1" },
  });
  const [selectedFile, setSelectedFile] = useState();
  const [colorForSVG, setColorForSVG] = useState({
    fill: `rgba(${selectedPickerColorFill.color.r}, ${selectedPickerColorFill.color.g}, ${selectedPickerColorFill.color.b}, ${selectedPickerColorFill.color.a})`,
    stroke: `rgba(${selectedPickerColorStroke.color.r}, ${selectedPickerColorStroke.color.g}, ${selectedPickerColorStroke.color.b}, ${selectedPickerColorStroke.color.a})`,
  });

  const svgRef = useRef();

  const [svgcontents, setSVGContents] = useState(null);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `editedSVG.svg`);
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

  useEffect(() => {
    if (selectedFile) {
      selectedFile.text().then((value) => {
        setSVGContents(value);
      });
    }
  }, [selectedFile]);

  const changeColorForFill = (color) => {
    setSelectedPickerColorFill({ color: color.rgb });
    setColorForSVG({
      ...colorForSVG,
      fill: `rgba(${selectedPickerColorFill.color.r}, ${selectedPickerColorFill.color.g}, ${selectedPickerColorFill.color.b}, ${selectedPickerColorFill.color.a})`,
    });
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
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
      {svgcontents && (
        <SvgLoader
          svgXML={svgcontents}
          style={{ width: "500px", height: "200px", border: "solid 1px" }}
          onSVGReady={() => {
            var ele = document.getElementById("Capa_1");
            console.log(ele);
          }}
        >
          <SvgProxy
            selector="path"
            onElementSelected={(elem) => {
              if (elem.length > 1) {
                elem.map((paths, index) => {
                  paths.addEventListener(
                    "click",
                    () => {
                      console.log(paths.getAttribute("fill"));
                    },
                    false
                  );
                });
              } else
                elem.addEventListener(
                  "click",
                  () => {
                    console.log("1");
                  },
                  false
                );
            }}
          />
        </SvgLoader>
      )}
    </div>
  );
};

export default App;
