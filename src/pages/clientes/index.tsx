import React from "react";
import ModelPage from "@/components/common/ModelPage";
import ClientsComponent from "@/components/ClientsComponent/GeneralClients";
import { useRouter } from "next/router";

export default function Clientes() {
    
    return (
        <div>
            <ModelPage
                nomePagina="Clientes"
                content={<ClientsComponent />}
            />
        </div>
    );
}