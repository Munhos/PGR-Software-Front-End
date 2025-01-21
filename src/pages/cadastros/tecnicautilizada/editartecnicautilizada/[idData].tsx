import React from "react";
import ModelPage from "@/components/common/ModelPage";
import Edittecnicautilizada from "@/components/Cadastro/TecnicaUtilizada/EditTecnicaUtilizada";

export default function edittecnicautilizada() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Técnicas Utilizadas"
                content={<Edittecnicautilizada />}
            />
        </div>
    );
}