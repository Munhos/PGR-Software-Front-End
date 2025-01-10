import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";

interface WriteInputProps {
    content: string;
    placeHolder: string;
    width: string;
    label: string;
}

export default function WriteInput({ placeHolder, content, width, label }: WriteInputProps) {
    const [dataContent, setDataContent] = useState(content);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Ajusta a altura do textarea automaticamente
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Reseta a altura
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Define a nova altura
        }
    }, [dataContent]); // Atualiza sempre que o conteúdo muda

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDataContent(event.target.value);
    };

    return (
        <div className={`${styles["input-wrapper"]} form-floating mb-3`} style={{ width }}>
            <textarea
                ref={textareaRef}
                onChange={handleInputChange}
                value={dataContent}
                className={`form-control ${styles.texareaInput}`}
                id="floatingTextarea"
                placeholder={placeHolder}
                rows={1} // Define a altura inicial
                style={{
                    resize: "none", // Impede o redimensionamento manual
                    overflow: "hidden", // Remove a barra de rolagem
                }}
            />
            <label htmlFor="floatingTextarea">{label}</label>
        </div>
    );
}
