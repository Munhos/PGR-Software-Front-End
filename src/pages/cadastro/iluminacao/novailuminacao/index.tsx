import React from "react";
import NewIluminacao from "@/components/Cadastro/Iluminacao/newIluminacao";
import ModelPage from "@/components/common/ModelPage";

export default function newiluminacao() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Nova Iluminação", url: "/cadastro/iluminacao" }}
                content={<NewIluminacao />}
            />
            
        </div>
    );
}