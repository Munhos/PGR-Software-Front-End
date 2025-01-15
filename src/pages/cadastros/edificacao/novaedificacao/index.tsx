import React from "react";
import NewEdificacao from "@/components/Cadastro/Edificacao/newEdificacao";
import ModelPage from "@/components/common/ModelPage";

export default function newedificacao() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Edificação"
                content={<NewEdificacao />}
            />
            
        </div>
    );
}