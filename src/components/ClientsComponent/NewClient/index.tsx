import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import ButtonAddImage from "@/components/common/Buttons/ButtonAddImageLogo";
import ButtonAddPDF from "@/components/common/Buttons/ButtonAddDocumentoBase";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";

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
            <WriteInput label="CNPJ" content={cnpj || ""} width="30%" placeHolder="CNPJ"/>
            <WriteInput label="Nome Fantasia" content={nomeFantasia || ""} width="70%" placeHolder="Nome Fantasia"/>
            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="Razão Social" content={razaoSocial || ""} width="100%" placeHolder="Razão Social"/>
            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="Atividade Principal" content={cnae || ""} width="100%" placeHolder="CNAE"/>

            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="Atividade Principal" content={atividadePrincipal || ""} width="70%" placeHolder="Atividade Principal"/>
            <WriteInput label="Grau de Risco" content={grauRisco || ""} width="30%" placeHolder="Grau de Risco"/>
            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="CEP" content={cep || ""} width="33%" placeHolder="CEP"/>
            <WriteInput label="Estado" content={estado || ""} width="33%" placeHolder="Estado"/>
            <WriteInput label="Cidade" content={cidade || ""} width="33%" placeHolder="Cidade"/>
            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="Localização Completa" content={localizacaoCompleta || ""} width="100%" placeHolder="Localização Completa"/>
            </div>
            {/* <div className={styles.divContainerInputs}>
            <WriteInput label="Responsável pela Aprovação" content={responsavelAprovacao || ""} width="70%" placeHolder="Responsável pela Aprovação"/>
            <WriteInput label="Data" content={data || ""} width="30%" placeHolder="Data"/>
            </div> */}
            <div className={styles.divContainerInputs}>
            <WriteInput label="E-mail Financeiro" content={email || ""} width="50%" placeHolder="E-mail Financeiro"/>
            <WriteInput label="Contato Financeiro" content={contato || ""} width="50%" placeHolder="Contato Financeiro"/>
            </div>
            <div className={styles.divContainerInputs}>
            <WriteInput label="Observações" content={observacao || ""} width="100%" placeHolder="Observações"/>
            </div>
            <div className={styles.divContainerInputs2}>
                <div><ButtonAddImage name="Adicionar Logo"/></div>
                <div><ButtonAddPDF type="button"/></div>
                <div><ButtonSave /></div>
            </div>
            
        </div>
    );
}