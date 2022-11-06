import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerComponent = ({ title, changeColor, selectedPickerColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const showOrHideColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div>
      <div onClick={showOrHideColorPicker} />
      <SketchPicker color={selectedPickerColor} onChange={changeColor} />
    </div>
  );
};

export default ColorPickerComponent;
