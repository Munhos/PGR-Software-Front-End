import React from "react";
import NewIluminacao from "@/components/Cadastro/Iluminacao/newIluminacao";
import ModelPage from "@/components/common/ModelPage";

export default function newiluminacao() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Iluminação"
                content={<NewIluminacao />}
            />
            
        </div>
    );
}