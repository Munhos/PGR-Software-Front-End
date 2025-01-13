import React from "react";
import NewEdificacao from "@/components/Cadastro/Edificacao/newEdificacao";
import ModelPage from "@/components/common/ModelPage";

export default function newedificacao() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Edificação", url: "/cadastro/edificacao" }}
                content={<NewEdificacao />}
            />
            
        </div>
    );
}