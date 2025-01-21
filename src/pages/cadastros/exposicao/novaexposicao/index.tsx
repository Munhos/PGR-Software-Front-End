import React from "react";
import NewExposicao from "@/components/Cadastro/Exposicao/newExposicao";
import ModelPage from "@/components/common/ModelPage";

export default function newexposicao() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Exposição"
                content={<NewExposicao/>}
            />
            
        </div>
    );
}