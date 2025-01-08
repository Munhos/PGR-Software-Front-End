import React from "react";
import ButtonDeleteTable from "./ButtonDelete";
import ButtonEditTable from "./ButtonEdit";
import styles from "./style.module.css"

interface ButtonEditTableProps {
    idData: {
        id: string;
        route: string;
    };
}

export default function ConjunctButtonEditDelete({idData}: ButtonEditTableProps) {
    return (
        <div className={styles.containerButonsTable}>
            <ButtonEditTable idData={idData}/>
            <ButtonDeleteTable idData={idData}/>
        </div>
    );
}