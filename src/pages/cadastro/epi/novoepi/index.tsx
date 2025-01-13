import React from "react";
import NewEpi from "@/components/Cadastro/Epi/EditEpi";
import ModelPage from "@/components/common/ModelPage";

export default function newepi() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Novo Epi", url: "/cadastro/epi" }}
                content={<NewEpi />}
            />
            
        </div>
    );
}