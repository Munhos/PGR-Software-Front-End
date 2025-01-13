import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditEdificacao from "@/components/Cadastro/Edificacao/EditEdificacao";

export default function editedificacao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Edificação", url: "/cadastro/edificacao" }}
                content={<EditEdificacao />}
            />
        </div>
    );
}