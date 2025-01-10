import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEdificacao from "@/components/Cadastro/Edificacao/EditEdification";

export default function edificacao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Edificação", url: "/cadastro/edificacao" }}
                content={<EditEdificacao />}
            />
        </div>
    );
}