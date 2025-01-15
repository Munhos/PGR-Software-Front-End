import React from "react";
import NewParede from "@/components/Cadastro/Parede/newParede";
import ModelPage from "@/components/common/ModelPage";

export default function newparede() {
    return (
        <div>
            <ModelPage
                nomePagina="Nova Parede"
                content={<NewParede />}
            />
            
        </div>
    );
}