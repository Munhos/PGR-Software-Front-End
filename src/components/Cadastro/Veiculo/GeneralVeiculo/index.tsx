import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function VeiculoComponent() {
  return (
    <div>
      <div className={styles.mainContainerOptions}>
        <div className={styles.containerOptions}>
          <NormalSearchInput width="300px" placeHolder="Pesquise por Descrição" />

          <ButtonSearch type="button" />

          <ButtonClean type="button" />
        </div>

        <Link href="/cadastros/veiculo/novoveiculo">
          <ButtonAdd title="Cadastro de Novo Veículo" />
        </Link>
      </div>
      <TableComponent
        dataTable={{
          tHeadData: ["Descrição"],
          tBodyData: [
            ["001", "Caminhão"],
            ["002", "Carro"],
            ["003", "Carreta"],
          ],
        }}
        route="/cadastros/veiculo/editarveiculo/"
      />
    </div>
  );
}
