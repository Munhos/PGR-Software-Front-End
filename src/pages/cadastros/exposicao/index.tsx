import React from "react";
import ModelPage from "@/components/common/ModelPage";
import ExposicaoComponent from "@/components/Cadastro/Exposicao/GeneralExposicao";

export default function exposicao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Exposição"
                content={<ExposicaoComponent />}
            />
        </div>
    );
}