import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ size, textButton, type, styleButton, styleText, ...rests }) => {
  return (
    <Button 
        size={size} 
        type={type}
        style={styleButton}
        {...rests}>
            <span style={styleText}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
