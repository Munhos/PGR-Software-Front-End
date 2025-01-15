import React from "react";
import ModelPage from "@/components/common/ModelPage";
import NewTrabalhador from "@/components/Trabalhadores/NewTrabalhador";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Cadastro de Trabalhador"
                content={<NewTrabalhador />}
            />
        </div>
    );
}