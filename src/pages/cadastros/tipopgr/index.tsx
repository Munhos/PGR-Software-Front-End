import React from "react";
import ModelPage from "@/components/common/ModelPage";
import PgrTypeComponent from "@/components/Cadastro/TipoPgr/GeneralTipoPGR";

export default function pgrtype() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Tipo PGR"
                content={<PgrTypeComponent />}
            />
        </div>
    );
}