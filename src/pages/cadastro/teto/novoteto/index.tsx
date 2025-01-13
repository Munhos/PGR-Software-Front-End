import React from "react";
import NewTeto from "@/components/Cadastro/Teto/newTeto";
import ModelPage from "@/components/common/ModelPage";

export default function newteto() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Teto", url: "/cadastro/teto" }}
                content={<NewTeto />}
            />
            
        </div>
    );
}