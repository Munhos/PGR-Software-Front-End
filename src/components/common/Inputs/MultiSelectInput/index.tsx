import React from "react";
import Select from 'react-select';

export default function MultiSelectInput() {
    return (
        <Select
    isMulti
    name="colors"
    options={[
      { value: 'red', label: 'Red' },]}
    className="basic-multi-select"
    classNamePrefix="select"
  />
    );
}