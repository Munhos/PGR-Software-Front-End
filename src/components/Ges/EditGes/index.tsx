import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonEdit from "@/components/common/Buttons/ButtonEdit";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import SearchEquipamentoComponent from "@/components/common/Inputs/ComboboxSelecionable";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import TableComponent from "@/components/common/Tables";
import Link from "next/link";
import React from "react";

export default function EditGes() {
  const BtnCopiar = () => {
    return <button className="btn btn-outline-success">Copiar</button>;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "40%",
        }}
      >
        <MultiSelectInput
          options={[
            { label: "Matheus", value: "Matheus" },
            { label: "Walter", value: "Walter" },
            { label: "Cledson", value: "Cledson" },
          ]}
          height="80px"
          width="90%"
          placeHolder="Funcionarios a Serem Adicionados"
        />
        <ButtonAdd title="Adicionar Funcionário" />
      </div>

      <div>
        <TableComponent
          dataTable={{
            tHeadData: ["Código", "Nome", "Cargo"],
            tBodyData: [
              ["001", "001", "Jorge", "Desenvolvedor"],
              ["002", "002", "Jorge", "Desenvolvedor"],
            ],
          }}
          route="/trabalhadores/editartrabalhador/"
        />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <WriteInput label="Código" content="" width="30%" placeHolder="Código" />
        <WriteInput label="Descrição GES" content="" width="70%" placeHolder="Descrição GES" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "32.5%", display: "flex", alignItems: "center", gap: "10px" }}>
          <MultiSelectInput
            options={[
              { label: "001", value: "001" },
              { label: "002", value: "002" },
              { label: "003", value: "003" },
            ]}
            height="80px"
            width="90%"
            placeHolder="Req. Ativ. Crítica (RAC)"
          />
          <ButtonEdit title="Edição de Req. Ativ. Crítica (RAC)" />
        </div>
        <div style={{ width: "32.5%", display: "flex", alignItems: "center", gap: "10px" }}>
          <MultiSelectInput
            options={[
              { label: "001", value: "001" },
              { label: "002", value: "002" },
              { label: "003", value: "003" },
            ]}
            height="80px"
            width="90%"
            placeHolder="Cursos Obrigatórios"
          />
          <ButtonEdit title="Edição de Cursos Obrigatórios" />
        </div>
        <div style={{ width: "32.5%", display: "flex", alignItems: "center", gap: "10px" }}>
          <MultiSelectInput
            options={[
              { label: "001", value: "001" },
              { label: "002", value: "002" },
              { label: "003", value: "003" },
            ]}
            height="80px"
            width="90%"
            placeHolder="EPI Obrigatório"
          />
          <ButtonEdit title="Edição de EPI Obrigatório" />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <WriteInput label="Observação" content="" width="100%" placeHolder="Observação" />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <WriteInput label="Caracterização dos Processos" content="" width="100%" placeHolder="Caracterização dos Processos" />
        <ButtonEdit title="Edição de Caracterização de Processos" />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <WriteInput
          label="Caracterização dos Ambientes de Trabalho"
          content=""
          width="100%"
          placeHolder="Caracterização dos Ambientes de Trabalho"
        />
        <ButtonEdit title="Edição de Caracterização dos Ambientes de Trabalho" />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <WriteInput label="Responsável" content="" width="70%" placeHolder="Responsável" />
        <div style={{ width: "30%", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <SelecionableSearchInput width="100%" value={["PGRTR", "PGRTR", "PGRTR"]} placeHolder="Tipo PGR" />
          <ButtonEdit title="Edição de Tipo PGR" />
        </div>
      </div>

      <hr />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6>Riscos</h6>
        </div>

        <div style={{ display: "flex", justifyContent:"space-between", gap: "15px", marginBottom: "15px", width: "100%" }}>
            <div style={{ display: "flex", gap: "15px", width: "35%" }}>
                <NormalSearchInput width="80%" placeHolder="Pesquise por Fator ou Fonte Geradora" />
                <ButtonSearch type="button" /> 
            </div>
            <Link href="/cadastros/riscos/novorisco">
                <ButtonAdd title="Adicionar Risco" />
            </Link>
        </div>

        <TableComponent
          dataTable={{
            tHeadData: ["Fator", "Fonte Geradora", ""],
            tBodyData: [
            [
                "001", 
                "Ruído Previdenciário", 
                "Área Administrativa", 
                <BtnCopiar />
            ],
            [
                "002",
                "Condições ou procedimentos que possam provocar contato com eletricidade",
                "Contato com circuitos elétricos",
                <BtnCopiar />,
            ],
            ],
          }}
          route="/trabalhadores/editartrabalhador/"
        />
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
            <ButtonSave />
      </div>
    </>
  );
}
