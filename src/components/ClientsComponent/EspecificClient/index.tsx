import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import TableComponent from "@/components/common/Tables";
import ButtonAddImage from "@/components/common/Buttons/ButtonAddImageLogo";
import ButtonAddPDF from "@/components/common/Buttons/ButtonAddDocumentoBase";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";

export default function EspecificClient({
    cnpj = "00.000.000/0001-00",
    nomeFantasia = "Empresa Fictícia LTDA",
    razaoSocial = "Empresa Fictícia Comércio de Produtos LTDA",
    cnae = "4711-3/01",
    atividadePrincipal = "Comércio varejista de mercadorias em geral",
    grauRisco = "Médio",
    cep = "12345-678",
    estado = "SP",
    cidade = "São Paulo",
    localizacaoCompleta = "Rua Exemplo, 123 - Bairro Exemplo, São Paulo - SP",
    responsavelAprovacao = "João Silva",
    data = "2024-12-19",
    contato = "(11) 98765-4321",
    email = "contato@empresaficticia.com",
    observacao = "Cliente registrado para teste no sistema."
}) {
    return (
        <>
            <div>
                <div className={styles.inputRow}>
                    <WriteInput width="50%" placeHolder="CNPJ" content={cnpj} label="CNPJ" />
                    <WriteInput width="50%" placeHolder="Nome" label="Nome" content={nomeFantasia} />
                </div>
                <div className={styles.inputRow}>
                    <WriteInput width="50%" placeHolder="Endereço" label="Endereço" content={localizacaoCompleta} />
                    <WriteInput width="50%" placeHolder="E-mail" label="E-mail" content={email} />
                </div>
                <div className={styles.inputRow}>
                    <MultiSelectInput
                        className={styles.multiSelectInput}
                        options={[
                            { value: "01", label: "01" },
                            { value: "02", label: "02" },
                            { value: "03", label: "03" },
                        ]}
                        placeHolder="CNAE"

                    />
                </div>
                <div className={styles.inputRow}>
                    <WriteInput width="70%" placeHolder="Atividade Principal" label="Atividade Principal" content={atividadePrincipal} />
                    <WriteInput width="30%" placeHolder="Grau de Risco" label="Grau de Risco" content={grauRisco} />
                </div>
                <div className={styles.inputRow}>
                    <WriteInput width="70%" placeHolder="Responsável pela Aprovação" label="Responsável pela Aprovação" content={responsavelAprovacao} />
                    <WriteInput width="30%" placeHolder="Data" label="Data" content={data} />
                </div>
            </div>
            <hr />
            <div>
                <h3 style={{ marginBottom: "15px" }}>Serviços Vinculados Ao Cliente</h3>

                <TableComponent
                    dataTable={{
                        tHeadData: ["Descrição", "Data de Início", "Data de Fim"],
                        tBodyData: [
                            ["001", "LOREM LOREM LOREM", "18/12", "18/12"],
                            ["002", "LOREM LOREM LOREM", "18/12", "18/12"],
                            ["003", "LOREM LOREM LOREM", "18/12", "18/12"],
                        ]
                    }}
                />

                <div className={styles.divContainerInputs2}>
                    <div><ButtonAddImage name="Adicionar Logo" /></div>
                    <div><ButtonAddPDF type="button" /></div>
                    <div style={{ cursor: "pointer" }}><ButtonSave /></div>
                </div>
            </div>
            <hr />
            <h3 style={{ marginBottom: "15px" }}>Gerar Laudos</h3>
            <div className={styles.generateLaudosContainer}>
                <table className={styles.generateLaudosTableContainer}>
                    <tbody className={styles.generateLaudosTable}>
                        <tr className={styles.tableTr}>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                PGR
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                Laudo de Periculosidade (L.P)
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                Programa de Conservação Auditiva (PCA)
                            </td>
                        </tr>

                        <tr className={styles.tableTr}>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                PGRTR
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                LTCAT
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                PCMSO
                            </td>
                        </tr>

                        <tr className={styles.tableTr}>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                Laudo de Insalubridade (L.I)
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                Programa de Proteção Respiratoria (PPR)
                            </td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name="" />
                                ASO
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={3} style={{ display: "flex", justifyContent: "flex-end" }}>
                                <div className={`${styles.buttonSaveContainer}`}>
                                    Gerar
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </>
    );
}
