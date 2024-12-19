import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

interface SimpleInputSelectProps {
  options: string[];
  placeholder?: string;
}

export default function SimpleInputSelect({ options, placeholder }: SimpleInputSelectProps) {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>

      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        placeholder={placeholder || "Digite ou selecione..."}
        className={styles.textarea}
        rows={1}
      />

      {/* Dropdown para selecionar */}
      {isDropdownVisible && (
        <ul className={styles.dropdown}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={styles.dropdownItem}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
