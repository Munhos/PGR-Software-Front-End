import React from "react";
import ModelPage from "@/components/common/ModelPage";
import TragetoriaComponent from "@/components/Cadastro/Tragetoria/GeneralTragetoria";

export default function tragetoria() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Tragetória"
                content={<TragetoriaComponent />}
            />
        </div>
    );
}