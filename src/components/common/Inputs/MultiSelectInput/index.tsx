import React from "react";
import Select from "react-select";

interface MultiSelectInputProps {
    options: { value: string; label: string }[];
    placeHolder: string;
    className: string; // Usando className em vez de style
}

export default function MultiSelectInput({ options, placeHolder, className }: MultiSelectInputProps) {
    const customStyles = {
        menu: (provided: any) => ({
            ...provided,
            zIndex: 9999,
        }),
    };

    return (
        <Select
            isMulti
            name="multi-select"
            options={options}
            placeholder={placeHolder}
            className={`${className} basic-multi-select`}
            classNamePrefix="select"
            styles={customStyles}
        />
    );
}
