import React from "react";
import ModelPage from "@/components/common/ModelPage";
import FontegeradoraComponent from "@/components/Cadastro/FonteGeradora/GeneralFonteGeradora";

export default function fontegeradora() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Fonte Geradora"
                content={<FontegeradoraComponent />}
            />
        </div>
    );
}