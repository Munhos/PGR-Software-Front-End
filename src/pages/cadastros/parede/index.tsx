import React from "react";
import ModelPage from "@/components/common/ModelPage";
import ParedeComponent from "@/components/Cadastro/Parede/GeneralParede";
import router, { useRouter } from "next/router";

export default function parede() {

    

    return (
        <div>
            <ModelPage
                nomePagina="Parede"
                content={<ParedeComponent />}
            />
        </div>
    );
}