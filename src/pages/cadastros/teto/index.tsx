import React from "react";
import ModelPage from "@/components/common/ModelPage";
import TetoComponent from "@/components/Cadastro/Teto/GeneralTeto";

export default function teto() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Teto"
                content={<TetoComponent />}
            />
        </div>
    );
}