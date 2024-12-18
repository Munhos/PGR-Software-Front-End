import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import ButtonAddImage from "@/components/common/Buttons/ButtonAddImage";
import ButtonAddPDF from "@/components/common/Buttons/ButtonAddPDF";

export default function NewClient() {
    return (
        <div className={styles.container}>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="30%" placeHolder="CNPJ"/>
            <NormalSearchInput width="70%" placeHolder="Nome Fantasia"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="100%" placeHolder="Razão Social"/>
            </div>
            <div className={styles.divContainerInputs}>
            <SelecionableSearchInput 
                width="98.5%"
                value={["01", "01", "01"]}
                placeHolder= "CNAE"
            />
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="70%" placeHolder="Atividade Principal"/>
            <NormalSearchInput width="30%" placeHolder="Grau de Risco"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="33%" placeHolder="CEP"/>
            <NormalSearchInput width="33%" placeHolder="Estado"/>
            <NormalSearchInput width="33%" placeHolder="Cidade"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="100%" placeHolder="Localização Completa"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="70%" placeHolder="Responsável pela Aprovação"/>
            <NormalSearchInput width="30%" placeHolder="Data"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="50%" placeHolder="E-mail Financeiro"/>
            <NormalSearchInput width="50%" placeHolder="Contato Financeiro"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput width="100%" placeHolder="Observações"/>
            </div>
            <div className={styles.divContainerInputs2}>
                <div><ButtonAddImage type="button"/></div>
                <div><ButtonAddPDF type="button"/></div>
            </div>
            
        </div>
    );
}