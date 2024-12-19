import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import ButtonAddImage from "@/components/common/Buttons/ButtonAddImageLogo";
import ButtonAddPDF from "@/components/common/Buttons/ButtonAddDocumentoBase";
import ButtonSave from "@/components/common/Buttons/ButtonSave";

interface newClientProps {
    cnpj?: string;
    nomeFantasia?: string;
    razaoSocial?: string;
    cnae?: string;
    atividadePrincipal?: string;
    grauRisco?: string;
    cep?: string;
    estado?: string;
    cidade?: string;
    localizacaoCompleta?: string;
    responsavelAprovacao?: string;
    data?: string;
    contato?: string;
    email?: string;
    observacao?: string;
    logo?: string;
    documentoBase?: string;
}

export default function NewAndEditClient({
    cnpj,
    nomeFantasia,
    razaoSocial,
    cnae,
    atividadePrincipal,
    grauRisco,
    cep,
    estado,
    cidade,
    localizacaoCompleta,
    responsavelAprovacao,
    data,
    contato,
    email,
    observacao,
    logo,
    documentoBase
}: newClientProps) {
    return (
        <div className={styles.container}>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={cnpj} width="30%" placeHolder="CNPJ"/>
            <NormalSearchInput content={nomeFantasia} width="70%" placeHolder="Nome Fantasia"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={razaoSocial} width="100%" placeHolder="Razão Social"/>
            </div>
            <div className={styles.divContainerInputs}>
            <SelecionableSearchInput 
                width="98.5%"
                value={["01", "01", "01"]}
                placeHolder= "CNAE"
            />
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={atividadePrincipal} width="70%" placeHolder="Atividade Principal"/>
            <NormalSearchInput content={grauRisco} width="30%" placeHolder="Grau de Risco"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={cep} width="33%" placeHolder="CEP"/>
            <NormalSearchInput content={estado} width="33%" placeHolder="Estado"/>
            <NormalSearchInput content={cidade} width="33%" placeHolder="Cidade"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={localizacaoCompleta} width="100%" placeHolder="Localização Completa"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={responsavelAprovacao} width="70%" placeHolder="Responsável pela Aprovação"/>
            <NormalSearchInput content={data} width="30%" placeHolder="Data"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={email} width="50%" placeHolder="E-mail Financeiro"/>
            <NormalSearchInput content={contato} width="50%" placeHolder="Contato Financeiro"/>
            </div>
            <div className={styles.divContainerInputs}>
            <NormalSearchInput content={observacao} width="100%" placeHolder="Observações"/>
            </div>
            <div className={styles.divContainerInputs2}>
                <div><ButtonAddImage type="button"/></div>
                <div><ButtonAddPDF type="button"/></div>
                <div><ButtonSave /></div>
            </div>
            
        </div>
    );
}