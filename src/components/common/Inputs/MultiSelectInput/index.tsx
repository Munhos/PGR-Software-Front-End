import React from "react";
import Select from "react-select";

interface MultiSelectInputProps {
    options: { value: string; label: string }[];
    placeHolder: string;
    className: string; // Usando className em vez de style
}

export default function MultiSelectInput({ options, placeHolder, className }: MultiSelectInputProps) {
    return (
        <Select
            isMulti
            name="multi-select"
            options={options}
            placeholder={placeHolder}
            className={`${className} basic-multi-select`} // Passando className corretamente
            classNamePrefix="select"
        />
    );
}
