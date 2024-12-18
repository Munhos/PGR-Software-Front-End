import React from "react";
import NewPgrType from "@/components/TipoPgr/newTipoPgr";
import ModelPage from "@/components/common/ModelPage";

export default function newpgrtype() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Tipo PGR", url: "/tipopgr" }}
                content={<NewPgrType />}
            />
            
        </div>
    );
}