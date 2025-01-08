import React from "react";
import ModelPage from "@/components/common/ModelPage";
import InitialPageTrabalhadores from "@/components/Trabalhadores/GeneralTrabalhadores";

export default function Trabalhadores() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Trabalhadores", url: "/" }}
                content={<InitialPageTrabalhadores />}
            />
        </div>
    );
}