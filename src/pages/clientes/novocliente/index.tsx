import React from "react";
import NewAndEditClient from "@/components/ClientsComponent/NewAndEditClient";
import ModelPage from "@/components/common/ModelPage";

export default function NovoCliente() {
    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Clientes", url: "/clientes" }}
                content={<NewAndEditClient />}
            />
            
        </div>
    );
}