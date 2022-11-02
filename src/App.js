import { useState } from "react";
import "./styles.css";

const App = () => {
  const [selectedFile, setSelectedFile] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log(selectedFile);
  };

  return (
    <div className="App">
      <h2>Upload SVG File</h2>
      <input type="file" name="file" onChange={changeHandler} />
    </div>
  );
};

export default App;
