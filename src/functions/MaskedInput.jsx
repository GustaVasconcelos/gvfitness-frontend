import React from "react";
import InputMask from "react-input-mask";

const MaskedInput = ({ value, onChange, placerholder }) => {
    return <InputMask 
        mask="999.999.999-99"
        onChange={onChange} 
        placerholder={placerholder}
        value={value}
    />
}

export default MaskedInput;