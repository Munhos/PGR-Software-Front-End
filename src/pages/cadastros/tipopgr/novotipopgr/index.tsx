import React from "react";
import NewPgrType from "@/components/Cadastro/TipoPgr/newTipoPgr";
import ModelPage from "@/components/common/ModelPage";

export default function newpgrtype() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Tipo PGR", url: "/cadastro/tipopgr" }}
                content={<NewPgrType />}
            />
            
        </div>
    );
}