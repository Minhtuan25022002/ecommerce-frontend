import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ size, textButton, type, styleButton, styleText, icon, ...rests }) => {
  return (
    <Button 
        size={size} 
        type={type}
        style={styleButton}
        icon={icon}
        {...rests}>
            <span style={styleText}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
