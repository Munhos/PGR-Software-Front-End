import React from "react";
import ModelPage from "@/components/common/ModelPage";
import MeiopropagacaoComponent from "@/components/Cadastro/MeioPropagacao/GeneralMeioPropagacao";

export default function meiopropagacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Meio de Propagação"
                content={<MeiopropagacaoComponent />}
            />
        </div>
    );
}