import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTeto from "@/components/Cadastro/Teto/EditTeto";

export default function editteto() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Teto"
                content={<EditTeto />}
            />
        </div>
    );
}