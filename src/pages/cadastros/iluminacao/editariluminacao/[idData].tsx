import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTIluminacao from "@/components/Cadastro/Iluminacao/EditIluminacao";
import EditIluminacao from "@/components/Cadastro/Iluminacao/EditIluminacao";

export default function editiluminacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Iluminação"
                content={<EditIluminacao />}
            />
        </div>
    );
}