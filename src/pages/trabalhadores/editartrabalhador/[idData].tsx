import React from "react";
import ModelPage from "@/components/common/ModelPage";
import NewTrabalhador from "@/components/Trabalhadores/NewTrabalhador";
import EditTrabalhador from "@/components/Trabalhadores/EditTrabalhadores";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Edição de Trabalhador", url: "/trabalhadores" }}
                content={<EditTrabalhador />}
            />
        </div>
    );
}