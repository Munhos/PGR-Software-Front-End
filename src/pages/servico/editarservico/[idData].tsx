import React from "react";
import ModelPage from "@/components/common/ModelPage";
import EspecificClient from "@/components/ClientsComponent/EspecificClient";
import { useRouter } from 'next/router';
import EditPageServicos from "@/components/Servicos/EditPageServicos";


export default function Cliente() {

        const router = useRouter();
        const { idData } = router.query;

    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Editar Serviço", url: "/servico" }}
                content={<EditPageServicos
                />}
            />

        </div>
    );
}