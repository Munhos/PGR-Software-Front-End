import React from "react";
import NewTecnicaUtilizada from "@/components/Cadastro/TecnicaUtilizada/newTecnicaUtilizada";
import ModelPage from "@/components/common/ModelPage";

export default function newtecnicautilizada() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Técnica Utilizada"
                content={<NewTecnicaUtilizada />}
            />
            
        </div>
    );
}