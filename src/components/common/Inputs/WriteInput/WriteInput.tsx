import React, {useState} from "react";
import styles from "./style.module.css";

interface WriteInputProps {
    content: string;
    placeHolder: string;
    width: string;
    label: string;
}

export default function WriteInput({ placeHolder, content, width, label }: WriteInputProps) {
    const [dataContent, setDataContent] = useState(content);
    
    
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDataContent(event.target.value); // Permite edição do input
        };

    return (
        <div className={`${styles["input-wrapper"]} form-floating mb-3`} style={{width}}>
            <input onChange={handleInputChange} type="email" value={dataContent} className="form-control" id="floatingInput" placeholder={placeHolder} />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    );
}