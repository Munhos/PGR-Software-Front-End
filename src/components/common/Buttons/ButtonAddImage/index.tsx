import React, { useState } from "react";
import styles from "./style.module.css";

interface ButtonAddProps {
    type: string;
}

export default function ButtonAddImage({ type }: ButtonAddProps) {
    const [image, setImage] = useState<File | null>(null);

    // Função para lidar com a seleção de arquivos
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setImage(files[0]); // Atualiza o estado com a imagem selecionada
            event.target.value = ""; // Limpa o valor do input
        }
    };

    // Função para remover a imagem do estado
    const handleRemoveImage = () => {
        setImage(null); // Remove a imagem do estado
    };

    return (
        <div className={styles.buttonAddImageContainer}>
            {image ? (
                <>

                    <div className={`${styles.buttonAddContainer}`}>
                        <i
                            className={`bi bi-trash ${styles.iconAdd2}`}
                            onClick={handleRemoveImage}
                        ></i>
                    </div>

                    <h6>Deletar Imagem</h6>
                </>
            ) : (
                <>

                    <label htmlFor="file-upload" className={`${styles.buttonAddContainer}`}>
                        <i className={`bi bi-plus ${styles.iconAdd}`}></i>
                    </label>

                    <h6>Adicionar Imagem</h6>
                </>
            )}

            <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
            />

            {image && (
                <div className={styles.imageItem}>
                    <img
                        src={URL.createObjectURL(image)}
                        alt="Imagem Selecionada"
                        className={styles.imageThumbnail}
                    />
                </div>
            )}
        </div>
    );
}
