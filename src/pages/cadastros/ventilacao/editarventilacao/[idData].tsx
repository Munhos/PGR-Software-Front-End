import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditVentilacao from "@/components/Cadastro/Ventilacao/EditVentilacao";

export default function editventilacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Ventilação"
                content={<EditVentilacao />}
            />
        </div>
    );
}