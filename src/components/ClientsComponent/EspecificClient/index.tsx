import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";

export default function EspecificClient() {
    return (
        <>
            <div>
                <NormalSearchInput width="50%" placeHolder="CNPJ" />
                <NormalSearchInput width="50%" placeHolder="Nome" />
            </div>
            <div>
            <NormalSearchInput width="50%" placeHolder="Endereço" />
            <NormalSearchInput width="50%" placeHolder="E-mail" />
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>
    );
}