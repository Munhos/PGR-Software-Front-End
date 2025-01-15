import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css";
import Link from "next/link";
import { PiCertificate } from "react-icons/pi";


interface ButtonSearchInitialPageProps {
  url: string;
  icon: string | React.ReactNode;
  arrow: string;
  text: string;
  dropdownItems?: string[];
}

export default function ButtonSearchInitialPage({
  url,
  icon,
  arrow,
  text,
  dropdownItems,
}: ButtonSearchInitialPageProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Referência para o dropdown

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false); // Fecha o dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Link className={styles.link} href={url}>
      <div
        ref={dropdownRef}
        className={`${styles.buttonSearchInitialPageContainer}`}
      >
        <div
          className={`${styles.buttonWithDropdown}`}
          onClick={dropdownItems ? toggleDropdown : undefined}
        >
          <div className={styles.iconPrincipal}>
            {typeof icon === "string" ? (
              <i className={icon}></i> 
            ) : (
              icon
            )}
          </div>
          <div className={styles.text}>{text}</div>
          {dropdownItems && (
            <i className={`${arrow} ${styles.iconSecundary}`}></i>
          )}
        </div>
        {dropdownItems && isDropdownOpen && (
          <div className={`${styles.dropdownMenu}`}>
            {dropdownItems.map((item, index) => (
              <a key={index} className={styles.dropdownItem}>
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}