import React from "react";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonSearchInitialPage from "../common/ButtonSearchInitialPage";
import styles from "./style.module.css";
import SearchEquipamentoComponent from "../common/Inputs/ComboboxSelecionable";
import Link from "next/link";
import { Label } from "reactstrap";

export default function InicialMenuComponent() {
  const clienteOptions = [
    { label: "SEARA", value: "SEARA" },
    { label: "JBS", value: "JBS" },
    { label: "Santa Terezinha", value: "Santa Terezinha" },
    {
      label: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA",
      value: "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA",
    },
  ];

  const handleSelectChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    console.log("Selecionado:", selectedOption);
  };

  return (
    <>
      <div className={`${styles.containerButton}`}>
        <SearchEquipamentoComponent
          options={clienteOptions}
          selectPlaceholder="Selecione um Cliente"
          selectOnChange={handleSelectChange}
          maxWidth="50rem"
          width="15rem"
        />
        <ButtonSearch type="button" />

        <Link href="/clientes">
          <ButtonAdd title="Clientes" />
        </Link>
      </div>
      <div className={`${styles.InicialMenuComponent}`}>
        <div className={`${styles.containerPrimaryButtons}`}>

          <ButtonSearchInitialPage url="/servico" icon="bi bi-person" arrow="" text="Serviços" />
          <ButtonSearchInitialPage url="/trabalhadores" icon="bi bi-person-vcard" arrow="" text="Trabalhadores" />
          <ButtonSearchInitialPage url="/ges" icon="bi bi-people" arrow="" text="GES" />
          <ButtonSearchInitialPage url="/laudos" icon="bi bi-book" arrow="" text="Laudos" />

          <ButtonSearchInitialPage
            url=""
            icon="bi bi-gear"
            arrow="bi bi-caret-down"
            text="Configurações"
            dropdownItems={[
              { label: "Engenheiro", url: "/configuracoes/engenheiros" },
              { label: "Empresa", url: "/configuracoes/empresa" },
              { label: "Usuários", url: "/configuracoes/usuarios" },
            ]}
          />
          <ButtonSearchInitialPage
            url="/cadastros"
            icon="bi bi-journal-plus"
            arrow=" "
            text="Cadastros"
          />
          <ButtonSearchInitialPage
            url=""
            icon="bi bi-coin"
            arrow="bi bi-caret-down"
            text="Financeiro"
            dropdownItems={[
              { label: "Assinaturas", url: "/financeiro/assinaturas" },
              { label: "Indicações", url: "/financeiro/indicacoes" },
            ]}
          />
        </div>
      </div>
    </>
  );
}
