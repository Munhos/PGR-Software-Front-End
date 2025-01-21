import React from "react";
import ModelPage from "@/components/common/ModelPage";
import TecnicautilizadaComponent from "@/components/Cadastro/TecnicaUtilizada/GeneralTecnicaUtilizada";

export default function tecnicautilizada() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Ténica Utilizada"
                content={<TecnicautilizadaComponent />}
            />
        </div>
    );
}