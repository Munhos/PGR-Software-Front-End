import ButtonAdd from "@/components/common/Buttons/ButtonAdd";
import MultiSelectInput from "@/components/common/Inputs/MultiSelectInput";
import SelecionableSearchInput from "@/components/common/Inputs/SelecionableSearchInput";
import WriteInput from "@/components/common/Inputs/WriteInput/WriteInput";
import ImageAddAndEditComponent from "@/components/ImageEdit/ImageAddAndEditComponent";
import Link from "next/link";
import React from "react";

export default function AddAmbienteDeTrabalho() {
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          <WriteInput label="Área (m2)" content="" width="50%" placeHolder="Área (m2)" />
          <WriteInput label="Pé direito (m)" content="" width="50%" placeHolder="Pé direito (m)" />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Tipo de edificação" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
          <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Teto" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Parede" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
          <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Ventilação" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <WriteInput label="Área (m2)" content="" width="50%" placeHolder="Quantidade de janelas" />
          <WriteInput label="Pé direito (m)" content="" width="50%" placeHolder="Quantidade de equipamentos" />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Iluminação" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
          <div style={{ width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Mobiliarios" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
        </div>
        <div style={{ display: "flex" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <SelecionableSearchInput value={["1", "2", "3"]} height="60px" width="100%" placeHolder="Equipamentos" />
            <Link href="/" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ButtonAdd type="button" />
            </Link>
          </div>
        </div>
        <div style={{ display: "flex", width:"100%" }}><WriteInput label="Veículos e/ou máquinas autopropelidas" content="" width="100%" placeHolder="Veículos e/ou máquinas autopropelidas" /></div>
        <div style={{ display: "flex", width:"100%" }}><WriteInput label="Informações adicionais" content="" width="100%" placeHolder="Informações adicionais" /></div>
      </div>
      <ImageAddAndEditComponent />
    </div>
  )
}