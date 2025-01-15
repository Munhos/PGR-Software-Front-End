import React from "react";
import NewRac from "@/components/Cadastro/Rac/newRac";
import ModelPage from "@/components/common/ModelPage";

export default function newrac() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo RAC"
                content={<NewRac />}
            />
            
        </div>
    );
}