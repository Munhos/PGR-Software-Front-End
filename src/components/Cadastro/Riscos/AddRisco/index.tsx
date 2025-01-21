import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React, { useState } from "react";

export default function AddRisco() {
    const [incluirLTCAT, setIncluirLTCAT] = useState(false);
    const [incluirInsalu, setIncluirInsalu] = useState(false);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SelecionableSearchInput height="60px" width="49.5%" placeHolder="Fator de Risco" value={
                    ["Ruído Previdenciário", "Ácido Nítrico"]
                } />

                <div style={{ display: "flex", width: "50%", gap: "10px" }}>
                    <SelecionableSearchInput height="60px" width="100%" placeHolder="Fonte Geradora" value={
                        ["Área Administrativa", "Trabalho com computadores na operação industrial"]
                    } />
                    <ButtonAdd title="Adicionar Técnica Utilizada" />
                </div>

            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div style={{ display: "flex", width: "25%", gap: "10px" }}>
                    <SelecionableSearchInput height="60px" width="80%" placeHolder="Exposição" value={
                        []
                    } />
                    <ButtonAdd title="Adicionar Técnica Utilizada" />
                </div>

                <div style={{ display: "flex", width: "25%", gap: "10px" }}>
                    <SelecionableSearchInput height="60px" width="80%" placeHolder="Meio de Propagação" value={
                        []
                    } />
                    <ButtonAdd title="Adicionar Técnica Utilizada" />
                </div>

                <div style={{ display: "flex", width: "25%", gap: "10px" }}>
                    <SelecionableSearchInput height="60px" width="80%" placeHolder="Trajetória" value={
                        []
                    } />
                    <ButtonAdd title="Adicionar Técnica Utilizada" />
                </div>

                <SelecionableSearchInput height="60px" width="25%" placeHolder="Transmitir E-Social?" value={
                    ["Sim", "Não"]
                } />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput width="25%" label="LT / LE" placeHolder="LT / LE" content="" />
                <WriteInput width="25%" label="Nivel de Ação" placeHolder="Nivel de Ação" content="" />
                <div style={{ display: "flex", width: "25%", gap: "10px" }}>
                    <SelecionableSearchInput height="60px" width="80%" placeHolder="Técnica Utilizada" value={
                        []
                    } />
                    <ButtonAdd title="Adicionar Técnica Utilizada" />
                </div>
                <SelecionableSearchInput height="60px" width="25%" placeHolder="Estratégia de Amostragem" value={
                    ["Preliminar", "Baseline"]
                } />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "25%", marginRight: "10px" }}>
                    <WriteInput width="100%" label="Probab. / Freq." placeHolder="Probab. / Freq." content="" />
                    <p style={{ fontSize: "12px", marginTop: "-15px", color: "var(--green03)" }}>Deixar Vazio quando N/A</p>
                </div>
                <div style={{ width: "25%", marginRight: "10px" }}>
                    <WriteInput width="100%" label="Conseq. / Severidade" placeHolder="Conseq. / Severidade" content="" />
                    <p style={{ fontSize: "12px", marginTop: "-15px", color: "var(--green03)" }}>Deixar Vazio quando N/A</p>
                </div>
                <WriteInput width="25%" label="Grau de Risco" placeHolder="Grau de Risco" content="" />
                <SelecionableSearchInput height="60px" width="25%" placeHolder="Classe de Risco" value={
                    ["Irrelevante", "Pequeno", "Tolerável", "Moderado", "Substancial", "Sério", "Critico"]
                } />
            </div>

            <WriteInput width="100%" label="Observações" placeHolder="Observações" content="" />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <WriteInput estado="disabled" width="33.3%" label="Intens. / Conc. (MG)" placeHolder="Intens. / Conc. (MG)" content="" />
                <WriteInput estado="disabled" width="33.3%" label="Desvio Padrão Geométrico (DPG)" placeHolder="Desvio Padrão Geométrico (DPG)" content="" />
                <WriteInput estado="disabled" width="33.3%" label="Percentil 95" placeHolder="Percentil 95" content="" />
            </div>

            <div>
                <strong><h6 style={{ color: "var(--green03)" }}>Detalhes das Avaliações</h6></strong>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <p style={{ color: "var(--green03)" }}>Ao adicionar detalhes de avaliação, o risco será quantitativo e os campos acima (MG, DPG, Perc. 95) serão calculados automaticamente.</p>

                    <div style={{ width: "100%" }}>
                        <TableComponent
                            dataTable={{
                                tHeadData: ["Trabalhador", "Intens. / Conc."],
                                tBodyData: [
                                    ["001", "NI", "A realizar"]
                                ]
                            }}

                            route="/cadastros/riscos/novorisco/editaravaliacao/"

                        />
                    </div>
                    
                    <Link href="/cadastros/riscos/novorisco/novaavaliacao">
                        <button className="btn btn-outline-success" style={{ margin: "15px" }}>INCLUIR AVALIAÇÃO</button>
                    </Link>

                </div>
            </div>

            <div style={{ display: "flex", width: "100%", gap: "10px" }}>
                <SelecionableSearchInput height="60px" width="100%" placeHolder="Medida de Controle" value={
                    []
                } />
                <ButtonAdd title="Adicionar Técnica Utilizada" />
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>

                <div style={{ width: "100%" }}>
                    <TableComponent
                        dataTable={{
                            tHeadData: ["Planos de Ação"],
                            tBodyData: [
                                ["001", "Realizar avaliação quantitativa para verificação de eficiência das medidas de controle"]
                            ]
                        }}

                        route="/cadastros/riscos/novorisco/editarplanoacao/"

                    />
                </div>

                <Link href="/cadastros/riscos/novorisco/novoplanoacao">
                    <button className="btn btn-outline-success" style={{ margin: "15px" }}>ADICIONAR PLANO DE AÇÃO</button>
                </Link>        

            </div>

            <div>
                
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex"}}>
                        <input style={{margin:"10px", transform:"translateY(-8px)"}} type="checkbox" name="" id="" onClick={() => incluirLTCAT ? setIncluirLTCAT(false) : setIncluirLTCAT(true)} />
                        <p>Incluir este risco no relatório LTCAT</p>
                    </div>

                    {
                        incluirLTCAT ? (
                            <WriteInput width="100%" label="Conclusão para o agente nocivo LTCAT" placeHolder="Conclusão para o agente nocivo LTCAT" content="" />

                        ) : (
                            <p></p>
                        )
                    }
                </div>

                <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex"}}>
                        <input style={{margin:"10px", transform:"translateY(-8px)"}} type="checkbox" name="" id="" onClick={() => incluirInsalu ? setIncluirInsalu(false) : setIncluirInsalu(true)} />
                        <p>Incluir este risco no relatório de Insalubridade</p>
                    </div>

                    {
                        incluirInsalu ? (
                            <WriteInput width="100%" label="Conclusão para o agente nocivo Insalubridade" placeHolder="Conclusão para o agente nocivo LTCAT" content="" />

                        ) : (
                            <p></p>
                        )
                    }
                </div>

            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", margin: "15px 15px" }}>
                <ButtonSave />
            </div>
        </>
    )
}