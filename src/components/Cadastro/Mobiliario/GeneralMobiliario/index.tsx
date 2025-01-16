import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function MobiliarioComponent() {
    return (
        <div>
            <div className={styles.mainContainerOptions}>
                <div className={styles.containerOptions}>

                    <NormalSearchInput
                        width="300px"
                        placeHolder="Descrição"
                    />

                    <ButtonSearch
                        type="button"
                    />

                    <ButtonClean
                        type="button"
                    />

                </div>

                <Link href="/cadastros/mobiliario/novomobiliario">
                    <ButtonAdd
                        title="Cadastro de Novo Mobiliário"
                    />
                </Link>


            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Descrição"],
                    tBodyData: [
                        ["001", "Mesas"],
                        ["002", "Cadeiras"],
                        ["003", "Estantes"]
                    ]
                }}

                route="/cadastros/mobiliario/editarmobiliario/"
            />
        </div>
    );
}
