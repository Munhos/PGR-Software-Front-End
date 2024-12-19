import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

interface NormalSearchProps {
    width: string;
    placeHolder: string;
    content?: string;
}

export default function NormalSearchInput({ width, placeHolder, content }: NormalSearchProps) {
    const [dataContent, setDataContent] = useState(content);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataContent(event.target.value); // Permite edição do input
    };

    return (
        <div className={styles["input-wrapper"]} style={{ width }}>
            <input
                placeholder={placeHolder}
                className={`${styles.input} form-control`}
                type="text"
                value={dataContent}
                onChange={handleInputChange}
            />
        </div>
    );
}
