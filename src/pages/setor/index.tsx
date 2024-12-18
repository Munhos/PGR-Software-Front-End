import React from "react";
import ModelPage from "@/components/common/ModelPage";
import SetorComponent from "@/components/Cadastro/Setor/GeneralSetor";

export default function setor() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Setor", url: "/" }}
                content={<SetorComponent />}
            />
        </div>
    );
}