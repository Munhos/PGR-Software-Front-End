import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";

interface SimpleInputSelectProps {
  options: string[];
  placeholder?: string;
}

export default function SimpleInputSelect({ options, placeholder }: SimpleInputSelectProps) {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setDropdownVisible(false);

    // Ajustar a altura da textarea de acordo com o número de linhas do item
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Redefine a altura para auto antes de ajustar

      // Calcular o número de linhas do item
      const lines = option.split('\n').length;
      const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight, 10);

      // Ajustar a altura da textarea para o número de linhas
      textareaRef.current.style.height = `${lines * lineHeight}px`;
    }
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
        ref={textareaRef}
        value={inputValue}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        placeholder={placeholder || "Digite ou selecione..."}
        className={styles.textarea}
        style={{ minHeight: '40px' }} // Garantindo que a altura mínima seja mantida
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
