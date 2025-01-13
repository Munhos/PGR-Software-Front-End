import React from "react";
import TableComponent from "@/components/common/Tables";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import styles from "./style.module.css";
import ButtonSearch from "@/components/common/Buttons/ButtonSearch";
import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonClean from "@/components/common/Buttons/ButtonClean";
import Link from "next/link";

export default function TetoComponent() {
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

                <Link href="/cadastro/teto/novoteto">
                    <ButtonAdd
                        type="button"
                    />
                </Link>

            </div>
            <TableComponent
                dataTable={{
                    tHeadData: ["Descrição"],
                    tBodyData: [
                        ["001", "Forro de PVC"],
                        ["002", "Forro de Gesso"],
                        ["003", "Forro de Madeira"]
                    ],
                }}

                route="/cadastro/teto/editarteto/"
            />
        </div>
    );
}