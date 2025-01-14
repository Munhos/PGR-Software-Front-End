import ButtonSave from "@/components/common/Buttons/ButtonSave";
import SearchEquipamentoComponent from "@/components/common/Inputs/ComboboxSelecionable";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import React from "react";

export default function NewUser(){
    return (
        <>
            <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
                <WriteInput content="" width="25%" label="Nome" placeHolder="Nome" />
                <WriteInput content="" width="25%" label="E-mail" placeHolder="E-mail" />
                <WriteInput content="" width="25%" label="Senha" placeHolder="Senha" />
                <SearchEquipamentoComponent options={[{label: "Microsoft", value:"Microsoft"}, {label: "Google", value:"Google"}, {label:"Spotfy", value:"Spotfy"}]} />
            </div>

            <div>
                <div style={{display: "flex", alignItems:"center", height:"40px", gap:"15px"}}>
                    <input type="checkbox" name="" id="" style={{marginBottom:"15px"}} />
                    <p>Visualizar Laudos</p>
                </div>

                <div style={{display: "flex", alignItems:"center", height:"40px", gap:"15px"}}>
                    <input type="checkbox" name="" id="" style={{marginBottom:"15px"}} />
                    <p>Editar Laudos</p>
                </div>

                <div style={{display: "flex", alignItems:"center", height:"40px", gap:"15px"}}>
                    <input type="checkbox" name="" id="" style={{marginBottom:"15px"}} />
                    <p>Visualizar configurações e clientes</p>
                </div>

                <div style={{display: "flex", alignItems:"center", height:"40px", gap:"15px"}}>
                    <input type="checkbox" name="" id="" style={{marginBottom:"15px"}} />
                    <p>Editar configurações e clientes</p>
                </div>

                <div style={{display: "flex", alignItems:"center", height:"40px", gap:"15px"}}>
                    <input type="checkbox" name="" id="" style={{marginBottom:"15px"}} />
                    <p>Realizar pagamentos</p>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"flex-end", marginTop:"15px"}}>
                <ButtonSave />
            </div>
        </>
    )
}