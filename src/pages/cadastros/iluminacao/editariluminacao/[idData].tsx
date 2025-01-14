import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTIluminacao from "@/components/Cadastro/Iluminacao/EditIluminacao";
import EditIluminacao from "@/components/Cadastro/Iluminacao/EditIluminacao";

export default function editiluminacao() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Iluminação", url: "/cadastro/iluminacao" }}
                content={<EditIluminacao />}
            />
        </div>
    );
}