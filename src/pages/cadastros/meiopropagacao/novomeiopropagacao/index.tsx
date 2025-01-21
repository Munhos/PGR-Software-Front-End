import React from "react";
import NewMeioPropagacao from "@/components/Cadastro/MeioPropagacao/newMeioPropagacao";
import ModelPage from "@/components/common/ModelPage";

export default function newmeiopropagacao() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Meio de Propagação"
                content={<NewMeioPropagacao/>}
            />
            
        </div>
    );
}