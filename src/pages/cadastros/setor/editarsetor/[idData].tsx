import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditSetor from "@/components/Cadastro/Setor/EditSetor";

export default function editsetor() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Setor"
                content={<EditSetor />}
            />
        </div>
    );
}