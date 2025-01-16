import React from "react";
import NewVeiculo from "@/components/Cadastro/Veiculo/newVeiculo";
import ModelPage from "@/components/common/ModelPage";

export default function newveiculo() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Tipo PGR"
                content={<NewVeiculo />}
            />
            
        </div>
    );
}