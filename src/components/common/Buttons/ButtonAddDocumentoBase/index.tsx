import React, { useState } from "react";
import styles from "./style.module.css";

interface ButtonAddPDFProps {
    type: string;
}

export default function ButtonAddPDF({ type }: ButtonAddPDFProps) {
    const [selectedPDF, setSelectedPDF] = useState<File | null>(null);

    // Função para lidar com a seleção de arquivos PDF
    const handlePDFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setSelectedPDF(files[0]); // Atualiza o estado com o arquivo selecionado
            event.target.value = ""; // Limpa o valor do input
        }
    };

    // Função para remover o PDF do estado
    const handleRemovePDF = () => {
        setSelectedPDF(null); // Remove o PDF do estado
    };

    return (
        <div className={styles.ButtonAddPDFContainer}>
            {selectedPDF ? (
                <>
                <div className={`${styles.addPDFButtonContainer}`}>
                    <i
                        className={`bi bi-trash ${styles.removePDFIcon}`}
                        onClick={handleRemovePDF}
                    ></i>
                </div>
                <h6>Deletar PDF</h6>
                
                </>
            ) : (
                <>
                <label htmlFor="pdf-upload" className={`${styles.addPDFButtonContainer}`}>
                    <i className={`bi bi-plus ${styles.addPDFIcon}`}></i>
                </label>
                <h6>Adicionar Documento Base</h6>
                
                </>
            )}

            {/* Input para selecionar arquivos PDF */}
            <input
                type="file"
                id="pdf-upload"
                style={{ display: "none" }}
                onChange={handlePDFChange}
                accept="application/pdf"
            />

            {/* Exibe o nome do arquivo PDF selecionado */}
            {selectedPDF && (
                <div className={styles.pdfDetails}>
                    <p>PDF Selecionado: {selectedPDF.name}</p>
                </div>
            )}
        </div>
    );
}