import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditVeiculo from "@/components/Cadastro/Veiculo/EditVeiculo";

export default function Editveiculo() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Editar Setor"
                content={<EditVeiculo />}
            />
        </div>
    );
}