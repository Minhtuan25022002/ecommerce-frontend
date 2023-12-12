import { Input } from "antd";
import React from "react";

const InputComponent = ({ size, placeholder, bordered, styleInput, ...rests }) => {
  return (
        <Input
          size={size} 
          bordered={bordered}
          placeholder={placeholder} 
          style={styleInput}
          {...rests}
        />
  );
}

export default InputComponent;

