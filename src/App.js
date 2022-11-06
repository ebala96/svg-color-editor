import { useRef, useState, useCallback, useEffect } from "react";
import "./App.css";
import ColorPickerComponent from "./components/Color-Picker-Component";
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
  const svgRef = useRef();
  const [svgString, setSvgString] = useState(null);
  const [svgPaths, setSvgPaths] = useState([]);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorsMap, setColorsMap] = useState([]);

  const downloadSVG = useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    downloadBlob(blob, `editedSVG.svg`);
  }, []);

  const updateColor = (oldcolor, newColor) => {
    svgPaths.forEach((path) => {
      if (path.getAttribute("fill") === oldcolor) {
        path.setAttribute("fill", newColor);
      }
    });
  };

  const uploadHandler = (event) => {
    const svgFile = event.target.files[0];
    setSvgString("");
    svgFile.text().then((value) => {
      setSvgString(value);
    });
  };

  const showOrHideColorPicker = (color) => {
    setSelectedColor(color);
    const openColorPalette =
      showColorPicker && color === selectedColor ? false : true;
    setShowColorPicker(openColorPalette);
  };

  const updateSvgPaths = (svgPaths) => {
    var colorsLocalMap = svgPaths.reduce((map, path) => {
      const color = path.getAttribute("fill");
      if (map[color] === undefined) {
        map[color] = true;
      }
      return map;
    }, {});
    setSvgPaths(svgPaths);
    setColorsMap([...Object.keys(colorsLocalMap)]);
  };

  const updatedColorsMap = () => {
    var colorsLocalMap = svgPaths.reduce((map, path) => {
      const color = path.getAttribute("fill");
      if (map[color] === undefined) {
        map[color] = true;
      }
      return map;
    }, {});
    setColorsMap([...Object.keys(colorsLocalMap)]);
  };
  return (
    <div className="App">
      <div className="svg-outer-container">
        <h2>Upload SVG File</h2>
        <input type="file" name="file" onChange={uploadHandler} />
        <div ref={svgRef} className="svg-container">
          {svgString && (
            <SvgLoader
              svgXML={svgString}
              style={{ width: "200px", height: "200px", border: "solid 1px" }}
            >
              <SvgProxy selector="path" onElementSelected={updateSvgPaths} />
            </SvgLoader>
          )}
        </div>
        {svgString && (
          <div>
            <button onClick={downloadSVG}>Download</button>
          </div>
        )}
        <div className="color-outer-container">
          {colorsMap.length > 0 &&
            colorsMap.map((color) => {
              return (
                <div
                  className="color-container"
                  key={color}
                  onClick={() => showOrHideColorPicker(color)}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
              );
            })}
        </div>
        <div className="color-picker-container">
          {showColorPicker && (
            <ColorPickerComponent
              title="Fill"
              changeColor={(color) => {
                updateColor(selectedColor, color.hex);
                setSelectedColor(color.hex);
                updatedColorsMap();
              }}
              selectedPickerColor={selectedColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
