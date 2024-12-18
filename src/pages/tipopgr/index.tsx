import React from "react";
import ModelPage from "@/components/common/ModelPage";
import PgrTypeComponent from "@/components/TipoPgr/GeneralTipoPGR";

export default function pgrtype() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Tipo PGR", url: "/" }}
                content={<PgrTypeComponent />}
            />
        </div>
    );
}