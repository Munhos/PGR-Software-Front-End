import React from "react";
import ButtonDeleteTable from "./ButtonDelete";
import ButtonEditTable from "./ButtonEdit";
import styles from "./style.module.css"

export default function ConjunctButtonEditDelete() {
    return (
        <div className={styles.containerButonsTable}>
            <ButtonEditTable />
            <ButtonDeleteTable />
        </div>
    );
}