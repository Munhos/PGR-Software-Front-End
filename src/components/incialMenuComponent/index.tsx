import React from "react";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonSearchInitialPage from "../common/ButtonSearchInitialPage";
import styles from "./style.module.css";

export default function InicialMenuComponent() {
  return (
    <div className={`${styles.InicialMenuComponent}`}>
      <div className={`${styles.containerButton}`}>
        <ButtonSearch type="button" />
        <ButtonAdd type="button" />
      </div>
      <div className={`${styles.containerPrimaryButtons}`}>
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-person "
          arrow=" "
          text="Serviços "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-person-vcard "
          arrow=" "
          text="Trabalhadores "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-people "
          arrow=" "
          text="GES "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-book"
          arrow=" "
          text="Laudos "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-gear"
          arrow="bi bi-caret-down"
          text="Configurações "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-journal-plus"
          arrow="bi bi-caret-down"
          text="Cadastros "
        />
        <ButtonSearchInitialPage
          url="/servicos"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Financeiro "
        />
      </div>
    </div>
  );
}
