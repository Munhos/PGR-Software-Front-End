import React from "react";
import NewAndEditClient from "@/components/ClientsComponent/NewAndEditClient";
import ModelPage from "@/components/common/ModelPage";

export default function NovoCliente() {
    return (
        <div>
            <ModelPage
                nomePagina="Clientes"
                content={<NewAndEditClient />}
            />
            
        </div>
    );
}