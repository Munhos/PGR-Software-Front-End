import React from "react";
import NewMedidacontrole from "@/components/Cadastro/MedidaControle/newMedidaControle";
import ModelPage from "@/components/common/ModelPage";

export default function newmedidacontrole() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Medida de Controle"
                content={<NewMedidacontrole />}
            />
            
        </div>
    );
}