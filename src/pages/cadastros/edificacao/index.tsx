import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EdificacaoComponent from "@/components/Cadastro/Edificacao/GeneralEdificacao";

export default function edificacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Edificação"
                content={<EdificacaoComponent />}
            />
        </div>
    );
}