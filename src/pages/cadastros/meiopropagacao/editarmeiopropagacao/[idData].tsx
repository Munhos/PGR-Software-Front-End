import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditMeioPropagacao from "@/components/Cadastro/MeioPropagacao/EditMeioPropagacao";

export default function editmeiopropagacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Meio de Propagação"
                content={<EditMeioPropagacao />}
            />
        </div>
    );
}