import React from "react";
import NewFatoresRisco from "@/components/Cadastro/FatoresRisco/newFatoresRisco";
import ModelPage from "@/components/common/ModelPage";

export default function newfatoresrisco() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Fatores de Risco"
                content={<NewFatoresRisco />}
            />
            
        </div>
    );
}