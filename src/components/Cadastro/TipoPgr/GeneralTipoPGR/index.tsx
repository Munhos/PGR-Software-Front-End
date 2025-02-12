import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function PgrTypeComponent() {
  return (
    <div>
      <div className={styles.mainContainerOptions}>
        <div className={styles.containerOptions}>
          <NormalSearchInput width="300px" placeHolder="Pesquise por Descrição" />

          <ButtonSearch type="button" />

          <ButtonClean type="button" />
        </div>

        <Link href="/cadastros/tipopgr/novotipopgr">
          <ButtonAdd title="Cadastro de Novo Tipo PGR" />
        </Link>
      </div>
      <TableComponent
        dataTable={{
          tHeadData: ["Descrição"],
          tBodyData: [
            ["001", "PGR"],
            ["002", "PGRTR"],
            ["003", "PGRMIN"],
          ],
        }}
        route="/cadastros/tipopgr/editartipopgr/"
      />
    </div>
  );
}
