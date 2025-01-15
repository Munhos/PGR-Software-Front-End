import React from "react";
import NewEpi from "@/components/Cadastro/Epi/EditEpi";
import ModelPage from "@/components/common/ModelPage";

export default function newepi() {
    return (
        <div>
            <ModelPage
                nomePagina="Novo EPI"
                content={<NewEpi />}
            />
            
        </div>
    );
}