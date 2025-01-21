import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditExposicao from "@/components/Cadastro/Exposicao/EditExposicao";

export default function editexposicao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Exposição"
                content={<EditExposicao />}
            />
        </div>
    );
}