import React from "react";
import NewSetor from "@/components/Cadastro/Setor/newSetor";
import ModelPage from "@/components/common/ModelPage";

export default function newsetor() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Setor", url: "/cadastro/setor" }}
                content={<NewSetor />}
            />
            
        </div>
    );
}