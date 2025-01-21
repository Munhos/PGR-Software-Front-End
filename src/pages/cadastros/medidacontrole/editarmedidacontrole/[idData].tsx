import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditMedidaControle from "@/components/Cadastro/MedidaControle/EditMedidaControle";

export default function editmedidacontrole() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Medida de Controle"
                content={<EditMedidaControle />}
            />
        </div>
    );
}