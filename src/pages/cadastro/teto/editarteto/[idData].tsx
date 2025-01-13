import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTeto from "@/components/Cadastro/Teto/EditTeto";

export default function editteto() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Teto", url: "/cadastro/teto" }}
                content={<EditTeto />}
            />
        </div>
    );
}