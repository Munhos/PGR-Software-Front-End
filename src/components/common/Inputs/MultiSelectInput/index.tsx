import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import styles from "./style.module.css";

export default function MultiSelectInput({ options, placeHolder, className, height, width }: any) {
    const [isFocused, setIsFocused] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [dataSelect, setDataSelect] = useState<any[]>([]);

    useEffect(() => {
        // Garante que `document` está disponível
        setIsClient(typeof window !== "undefined");
    }, []);

    const customStyles = useMemo(
        () => ({
            control: (provided: any, state: any) => ({
                ...provided,
                minHeight: height,
                borderColor: state.isFocused ? "#007bff" : provided.borderColor,
            }),
            container: (provided: any) => ({
                ...provided,
                width: "100%",
                marginBottom: "15px",
            }),
            menuPortal: (provided: any) => ({
                ...provided,
                zIndex: 9999,
            }),
        }),
        [height]
    );

    return (
        <main
            className={`${styles.mainContainer}`}
            style={{
                position: "relative",
                display: "flex",
                width: width,
                borderRadius: "5px",
            }}
        >
            <p
                className={`${styles.pPlaceholder} ${isFocused ? styles.focused : ""}`}
                style={{
                    position: "absolute",
                    left: "20px",
                    top: isFocused || dataSelect.length > 0 ? "5px" : "35px",
                    zIndex: 1,
                    transform:
                        isFocused || dataSelect.length > 0
                            ? "scale(0.9) translateX(-15px) translateY(8px)"
                            : "translateX(-5px) scale(1)",
                    transition: "transform 0.1s ease, top 0.1s ease, left 0.1s ease",
                    color: isFocused || dataSelect.length > 0 ? "gray" : "black",
                }}
            >
                {placeHolder}
            </p>
            <Select
                onChange={(selected) => setDataSelect(selected as any[] || [])} // Atualiza `dataSelect` com valores
                isMulti
                name="multi-select"
                options={options}
                className={`${className} basic-multi-select ${styles.select}`}
                classNamePrefix="select"
                styles={customStyles}
                menuPortalTarget={isClient ? document.body : undefined}
                placeholder=""
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </main>
    );
}
