import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import TableComponent from "@/components/common/Tables";
import ButtonAddImage from "@/components/common/Buttons/ButtonAddImageLogo";
import ButtonAddPDF from "@/components/common/Buttons/ButtonAddDocumentoBase";
import ButtonSave from "@/components/common/Buttons/ButtonSave";

export default function EspecificClient() {
    return (
        <>
            <div>
                <div className={styles.inputRow}>
                    <NormalSearchInput width="50%" placeHolder="CNPJ" />
                    <NormalSearchInput width="50%" placeHolder="Nome" />
                </div>
                <div className={styles.inputRow}>
                    <NormalSearchInput width="50%" placeHolder="Endereço" />
                    <NormalSearchInput width="50%" placeHolder="E-mail" />
                </div>
                <div className={styles.inputRow}>
                    <MultiSelectInput
                        className={styles.multiSelectInput} // Passando a classe CSS
                        options={[
                            { value: "01", label: "01" },
                            { value: "02", label: "02" },
                            { value: "03", label: "03" },
                        ]}
                        placeHolder="CNAE"
                    />
                </div>
                <div className={styles.inputRow}>
                    <NormalSearchInput width="70%" placeHolder="Atividade Principal" />
                    <NormalSearchInput width="30%" placeHolder="Grau de Risco" />
                </div>
                <div className={styles.inputRow}>
                    <NormalSearchInput width="70%" placeHolder="Responsavel pela Aprovação" />
                    <NormalSearchInput width="30%" placeHolder="Data" />
                </div>
            </div>
            <hr />
            <div>
                <h3 style={{ marginBottom: "15px" }}>Serviços Vinculados Ao Cliente</h3>

                <TableComponent
                    dataTable={{
                        tHeadData: ["Descrição", "Data de Início", "Data de Fim"],
                        tBodyData: [
                            ["LOREM LOREM LOREM", "18/12", "18/12"],
                            ["LOREM LOREM LOREM", "18/12", "18/12"],
                            ["LOREM LOREM LOREM", "18/12", "18/12"],
                        ],
                        idsData: ["0001", "0002", "0003"],
                    }}
                />

                <div className={styles.divContainerInputs2}>
                    <div><ButtonAddImage type="button" /></div>
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
                                <input type="checkbox" name=""  />
                                PGR</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                Laudo de Periculosidade (L.P)</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                Programa de Conservação Auditiva (PCA)</td>
                        </tr>

                        <tr className={styles.tableTr}>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                PGRTR</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                LTCAT</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                PCMSO</td>
                        </tr>

                        <tr className={styles.tableTr}>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                Laudo de Insalubridade (L.I)</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                Programa de Proteção Respiratoria (PPR)</td>
                            <td className={styles.tableTd}>
                                <input type="checkbox" name=""  />
                                ASO</td>
                        </tr>

                        <tr style={{ display: "flex", justifyContent: "flex-end" }}>
                            <ButtonSave />
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </>
    );
}
