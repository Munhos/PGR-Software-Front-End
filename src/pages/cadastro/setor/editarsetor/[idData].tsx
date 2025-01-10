import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditSetor from "@/components/Cadastro/Setor/EditSetor";

export default function setor() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Setor", url: "/cadastro/setor" }}
                content={<EditSetor />}
            />
        </div>
    );
}