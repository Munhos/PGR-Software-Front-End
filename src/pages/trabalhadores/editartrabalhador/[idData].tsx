import React from "react";
import ModelPage from "@/components/common/ModelPage";
import NewTrabalhador from "@/components/Trabalhadores/NewTrabalhador";
import EditTrabalhador from "@/components/Trabalhadores/EditTrabalhadores";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Edição de Trabalhador"
                content={<EditTrabalhador />}
            />
        </div>
    );
}