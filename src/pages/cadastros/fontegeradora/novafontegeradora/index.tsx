import React from "react";
import NewFontegereadora from "@/components/Cadastro/FonteGeradora/newFonteGeradora";
import ModelPage from "@/components/common/ModelPage";

export default function newfontegeradora() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Fonte Geradora"
                content={<NewFontegereadora />}
            />
            
        </div>
    );
}