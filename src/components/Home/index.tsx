import React from "react";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonSearchInitialPage from "../common/ButtonSearchInitialPage";
import styles from "./style.module.css";
import SimpleInputSelect from "../common/Inputs/ComboboxSelecionable";
import Link from "next/link";

export default function InicialMenuComponent() {
  return (
    <div className={`${styles.InicialMenuComponent}`}>
      <div className={`${styles.containerButton}`}>
        <SimpleInputSelect
          options={["SEARA", "JBS", "Santa Terezinha", "COOPERVAL COOPERATIVA AGROINDUSTRIAL VALE DO IVAI LTDA"]}
          placeholder="Selecione um Cliente"
        />
        <ButtonSearch type="button" />
        <Link href="/clientes">
          <ButtonAdd type="button" />
        </Link>
        
      </div>
      <div className={`${styles.containerPrimaryButtons}`}>
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-person"
          arrow=""
          text="Serviços"
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-person-vcard"
          arrow=""
          text="Trabalhadores"
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-people"
          arrow=""
          text="GES"
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-book"
          arrow=""
          text="Laudos"
        />
        <ButtonSearchInitialPage
          url="/configuracoes"
          icon="bi bi-gear"
          arrow="bi bi-caret-down"
          text="Configurações"
          dropdownItems={["Engenheiro", "Usuários", "Trabalhador", "Empresa"]}
        />
        <ButtonSearchInitialPage
          url="/cadastros"
          icon="bi bi-journal-plus"
          arrow=" "
          text="Cadastros"
        />
        <ButtonSearchInitialPage
          url="/financeiro"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Financeiro"
          dropdownItems={["Assinaturas", "Indicações"]}
        />
      </div>
    </div>
  );
}
