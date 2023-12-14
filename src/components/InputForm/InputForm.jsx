import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

function InputForm(props) {
    const [valueInput, setValueInput] = useState('')
    const { placeholder = 'Nhập text', ...rests } = props
    return ( 
        <WrapperInputStyle placeholder={placeholder} value={valueInput} {...rests} />
    );
}

export default InputForm;