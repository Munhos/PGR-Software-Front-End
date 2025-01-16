import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditFatoresRisco from "@/components/Cadastro/FatoresRisco/EditFatoresRisco";

export default function editfatoresrisco() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Fatores de Risco"
                content={<EditFatoresRisco />}
            />
        </div>
    );
}