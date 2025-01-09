import { ChangeEvent, FormEvent } from "react";
import { FormGroup, Form } from "reactstrap";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import styles from "./style.module.css";

interface Props {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  selectPlaceholder?: string;
  selectName?: string;
  selectValue?: string;
  selectOnChange?: (event: any) => void;
  required?: boolean;
  options?: any[];
  width?: string;
  maxWidth?: string;
  minWidth?: string;
}

const customStyles: StylesConfig = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    boxShadow: state.isFocused
      ? undefined
      : provided.boxShadow || "default-box-shadow-value",
    backgroundColor: "transparent",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#4e4e4e",
  }),
};

const SearchEquipamentoComponent = ({
  value,
  onChange,
  onClear,
  placeholder,
  selectPlaceholder,
  selectName,
  options,
  selectValue,
  selectOnChange,
  required,
  width,
  maxWidth,
  minWidth
}: Props) => {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  };

  return (
    <Form onSubmit={handleSearch} style={{ width, maxWidth, minWidth }}>
      <FormGroup className={styles.formGroupContent}>
        <Select
          styles={customStyles}
          className={styles.input}
          name={selectName}
          id={selectName}
          placeholder={selectPlaceholder || "Cliente"}
          components={makeAnimated()}
          required={required}
          value={selectValue}
          onChange={selectOnChange as any}
          options={options}
        />
      </FormGroup>
    </Form>
  );
};

export default SearchEquipamentoComponent;
