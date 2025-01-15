import React from "react";
import ButtonSearchInitialPage from "@/components/common/ButtonSearchInitialPage";
import styles from "./style.module.css";
import { PiCertificate } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { GiHammerNails } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { GiBrickWall } from "react-icons/gi";
import { FaRoad } from "react-icons/fa";
import { MdSimCardAlert } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiSolarRoofLight } from "react-icons/pi";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrFanOption } from "react-icons/gr";


export default function CadastroComponent() {
  return (
    <>
      <div className={`${styles.containerPrimaryButtons}`}>
        <ButtonSearchInitialPage
          url="/cadastros/cargo"
          icon="bi bi-person-badge"
          arrow=""
          text="Cargo"
        />
        <ButtonSearchInitialPage
          icon= {<PiCertificate />}
          url="/cadastros/cursoobrigatorio"
          arrow=""
          text="Curso Obrigatório"
        />
        <ButtonSearchInitialPage
          url="/cadastros/edificacao"
          icon={<FaRegBuilding />}
          arrow=""
          text="Edificação"
        />
        <ButtonSearchInitialPage
          url="/cadastros/epi"
          icon={<FaHelmetSafety />}
          arrow=""
          text="EPI"
        />
        <ButtonSearchInitialPage
          url="/cadastros/equipamemnto"
          icon={<GiHammerNails />}
          arrow="bi bi-caret-down"
          text="Equipamento"
        />
        <ButtonSearchInitialPage
          url="/cadastros/funcao"
          icon={<MdOutlineWorkHistory />}
          arrow=" "
          text="Função"
        />
        <ButtonSearchInitialPage
          url="/cadastros/gerencia"
          icon={<GrUserManager />}
          arrow="bi bi-caret-down"
          text="Gerência"
        />
        <ButtonSearchInitialPage
          url="/cadastros/iluminacao"
          icon={<FaRegLightbulb />}
          arrow="bi bi-caret-down"
          text="Iluminação"
        />
        <ButtonSearchInitialPage
          url="/cadastros/mobiliario"
          icon={<BiCabinet />}
          arrow="bi bi-caret-down"
          text="Mobiliário"
        />
        <ButtonSearchInitialPage
          url="/cadastros/parede"
          icon={<GiBrickWall />}
          arrow="bi bi-caret-down"
          text="Parede"
        />
        <ButtonSearchInitialPage
          url="/cadastros/piso"
          icon={<FaRoad />}
          arrow="bi bi-caret-down"
          text="Piso"
        />
        <ButtonSearchInitialPage
          url="/cadastros/rac"
          icon={<MdSimCardAlert />}
          arrow="bi bi-caret-down"
          text="RAC"
        />
        <ButtonSearchInitialPage
          url="/cadastros/setor"
          icon={<FaPeopleRoof />}
          arrow="bi bi-caret-down"
          text="Setor"
        />
        <ButtonSearchInitialPage
          url="/cadastros/teto"
          icon={<PiSolarRoofLight />}
          arrow="bi bi-caret-down"
          text="Teto"
        />
        <ButtonSearchInitialPage
          url="/cadastros/tipopgr"
          icon={<IoDocumentsOutline />}
          arrow="bi bi-caret-down"
          text="Tipo de PGR"
        />
        <ButtonSearchInitialPage
          url="/cadastros/ventilacao"
          icon={<GrFanOption />}
          arrow="bi bi-caret-down"
          text="Ventilação"
        />
      </div>
    </>
  );
}
