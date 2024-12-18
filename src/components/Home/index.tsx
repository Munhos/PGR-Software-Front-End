import React from "react";
import ButtonSearch from "../common/Buttons/ButtonSearch";
import ButtonAdd from "../common/Buttons/ButtonAdd";
import ButtonSearchInitialPage from "../common/ButtonSearchInitialPage";
import styles from "./style.module.css";
import SelecionableSearchInput from "../common/Inputs/SelecionableSearchInput";

export default function InicialMenuComponent() {
  return (
    <div className={`${styles.InicialMenuComponent}`}>
      <div className={`${styles.containerButton}`}>
        <SelecionableSearchInput value={["SEARA", "JBS", "Santa Terezinha"]} />
        <ButtonSearch type="button" />
        <ButtonAdd type="button" />
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
          arrow="bi bi-caret-down"
          text="Cadastros"
          dropdownItems={["PGR", "Cargo", "Setor", "Gerência", "Função", "RAC", "Edificação", "Piso", "Teto", "Parede", "Ventilação", 
            "Iluminação", "Mobiliários", "Equipamentos", "Cursos obrigatórios", "EPI's"]}
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
