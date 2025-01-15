import React from "react";
import NewTeto from "@/components/Cadastro/Teto/newTeto";
import ModelPage from "@/components/common/ModelPage";

export default function newteto() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Teto"
                content={<NewTeto />}
            />
            
        </div>
    );
}