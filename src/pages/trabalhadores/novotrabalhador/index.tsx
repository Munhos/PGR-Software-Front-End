import React from "react";
import ModelPage from "@/components/common/ModelPage";
import NewTrabalhador from "@/components/Trabalhadores/NewTrabalhador";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Cadastro de Trabalhador", url: "/trabalhadores" }}
                content={<NewTrabalhador />}
            />
        </div>
    );
}