import React from "react";
import ModelPage from "@/components/common/ModelPage";
import IluminacaoComponent from "@/components/Cadastro/Iluminacao/GeneralIluminacao";

export default function iluminacao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Iluminação", url: "/" }}
                content={<IluminacaoComponent />}
            />
        </div>
    );
}