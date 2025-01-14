import React from "react";
import ButtonSearchInitialPage from "@/components/common/ButtonSearchInitialPage";
import styles from "./style.module.css";


export default function CadastroComponent() {
  return (
    <>
      <div className={`${styles.containerPrimaryButtons}`}>
        <ButtonSearchInitialPage
          url="/cadastros/cargo"
          icon="bi bi-person"
          arrow=""
          text="Cargo"
        />
        <ButtonSearchInitialPage
          url="/cadastros/cursoobrigatorio"
          icon="bi bi-person-vcard"
          arrow=""
          text="Curso Obrigatório"
        />
        <ButtonSearchInitialPage
          url="/cadastros/edificacao"
          icon="bi bi-people"
          arrow=""
          text="Edificação"
        />
        <ButtonSearchInitialPage
          url="/cadastros/epi"
          icon="bi bi-book"
          arrow=""
          text="EPI"
        />
        <ButtonSearchInitialPage
          url="/cadastros/equipamemnto"
          icon="bi bi-gear"
          arrow="bi bi-caret-down"
          text="Equipamento"
        />
        <ButtonSearchInitialPage
          url="/cadastros/funcao"
          icon="bi bi-journal-plus"
          arrow=" "
          text="Função"
        />
        <ButtonSearchInitialPage
          url="/cadastros/gerencia"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Gerência"
        />
        <ButtonSearchInitialPage
          url="/cadastros/iluminacao"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Iluminação"
        />
        <ButtonSearchInitialPage
          url="/cadastros/mobiliario"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Mobiliário"
        />
        <ButtonSearchInitialPage
          url="/cadastros/parede"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Parede"
        />
        <ButtonSearchInitialPage
          url="/cadastros/piso"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Piso"
        />
        <ButtonSearchInitialPage
          url="/cadastros/rac"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="RAC"
        />
        <ButtonSearchInitialPage
          url="/cadastros/setor"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Setor"
        />
        <ButtonSearchInitialPage
          url="/cadastros/teto"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Teto"
        />
        <ButtonSearchInitialPage
          url="/cadastros/tipopgr"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Tipo de PGR"
        />
        <ButtonSearchInitialPage
          url="/cadastros/ventilacao"
          icon="bi bi-coin"
          arrow="bi bi-caret-down"
          text="Ventilação"
        />
      </div>
    </>
  );
}
