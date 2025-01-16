import React from "react";
import ModelPage from "@/components/common/ModelPage";
import FatoresRiscoComponent from "@/components/Cadastro/FatoresRisco/GeneralFatoresRisco";

export default function fatoresrisco() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Fatores de Risco"
                content={<FatoresRiscoComponent />}
            />
        </div>
    );
}