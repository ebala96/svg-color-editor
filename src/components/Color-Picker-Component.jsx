import { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";

const ColorPickerComponent = ({ title, changeColor, selectedPickerColor }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const showOrHideColorPicker = () => {
    console.log(showColorPicker);
    setShowColorPicker(!showColorPicker);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        //background: `rgba(${selectedPickerColor.color.r}, ${selectedPickerColor.color.g}, ${selectedPickerColor.color.b}, ${selectedPickerColor.color.a})`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      {/* <h6>Color Picker for {title}</h6>
        <div style={ styles.swatch } onClick={ showOrHideColorPicker }>
          <div style={ styles.color } />
        </div> */}
      {/* {showColorPicker ? ( */}
      <div style={styles.popover}>
        <div style={styles.cover} onClick={showOrHideColorPicker} />
        <SketchPicker color={selectedPickerColor} onChange={changeColor} />
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default ColorPickerComponent;
