import React from "react";
import ModelPage from "@/components/common/ModelPage";
import MedidacontroleComponent from "@/components/Cadastro/MedidaControle/GeneralMedidaControle";

export default function medidacontrole() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Medida de Controle"
                content={<MedidacontroleComponent />}
            />
        </div>
    );
}