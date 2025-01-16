import React from "react";
import ModelPage from "@/components/common/ModelPage";
import VeiculoComponent from "@/components/Cadastro/Veiculo/GeneralVeiculo";

export default function veiculo() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Tipo PGR"
                content={<VeiculoComponent />}
            />
        </div>
    );
}