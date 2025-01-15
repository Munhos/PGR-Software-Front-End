import React from "react";
import ModelPage from "@/components/common/ModelPage";
import VentilacaoComponent from "@/components/Cadastro/Ventilacao/GeneralVentilacao";

export default function ventilacao() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Ventilação"
                content={<VentilacaoComponent />}
            />
        </div>
    );
}