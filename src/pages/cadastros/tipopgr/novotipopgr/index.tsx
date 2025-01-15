import React from "react";
import NewPgrType from "@/components/Cadastro/TipoPgr/newTipoPgr";
import ModelPage from "@/components/common/ModelPage";

export default function newpgrtype() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo Tipo PGR"
                content={<NewPgrType />}
            />
            
        </div>
    );
}