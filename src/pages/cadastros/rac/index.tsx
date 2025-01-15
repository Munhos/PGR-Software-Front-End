import React from "react";
import ModelPage from "@/components/common/ModelPage";
import RacComponent from "@/components/Cadastro/Rac/GeneralRac";

export default function novorac() {
    
    return (
        <div>
            <ModelPage
                nomePagina="RAC"
                content={<RacComponent />}
            />
        </div>
    );
}