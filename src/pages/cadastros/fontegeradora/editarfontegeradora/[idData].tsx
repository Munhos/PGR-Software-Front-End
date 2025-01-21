import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditFontegeradora from "@/components/Cadastro/FonteGeradora/EditFonteGeradora";

export default function editmobiliario() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Fonte Geradora"
                content={<EditFontegeradora />}
            />
        </div>
    );
}