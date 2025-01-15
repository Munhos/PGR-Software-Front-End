import React from "react";
import ModelPage from "@/components/common/ModelPage";
import InitialPageTrabalhadores from "@/components/Trabalhadores/GeneralTrabalhadores";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Trabalhadores"
                content={<InitialPageTrabalhadores />}
            />
        </div>
    );
}