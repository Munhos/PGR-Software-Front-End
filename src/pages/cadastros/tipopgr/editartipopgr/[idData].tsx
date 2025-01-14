import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EditTipoPgr from "@/components/Cadastro/TipoPgr/EditSetor";

export default function edittipopgr() {
    
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Setor", url: "/cadastro/tipopgr" }}
                content={<EditTipoPgr />}
            />
        </div>
    );
}