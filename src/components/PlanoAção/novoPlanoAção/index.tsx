import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import ButtonSave from "@/components/common/Buttons/ButtonSave";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import Link from "next/link";
import React from "react";

export default function NovoPlanoAção() {
    return (
        <>
            <div style={{display:"flex", gap:"10px"}}>
                <SelecionableSearchInput width="100%" placeHolder="Medidas de Controle Necessárias" value={["001", "002", "003"]}/>
                <Link href="">
                    <ButtonAdd title="Adicionar Medidas de Controle Necessárias" />
                </Link>
            </div>

            <div style={{display:"flex"}}>
                <WriteInput width="33%" label="Responsável" />
                <WriteInput width="33%" label="Data Prevista" />
                <WriteInput width="33%" label="Data Realizada" />
            </div>

            <div style={{display:"flex", justifyContent:"flex-end"}}>
                <ButtonSave />
            </div>
        </>
    )
}