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
import { FaTruck } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
import { GiThorHammer } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRadiation } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { GrDirections } from "react-icons/gr";
import { AiOutlineControl } from "react-icons/ai";

export default function CadastroComponent() {
  return (
    <>
      <h4>Cadastro Trabalhador </h4>
      <div className={`${styles.containerPrimaryButtons}`}>
        <ButtonSearchInitialPage
          url="/cadastros/cargo"
          icon="bi bi-person-badge"
          arrow=""
          text="Cargo"
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
      </div>
      <h4>Cadastro GES </h4>
      <div className={`${styles.containerSecondaryButtons}`}>
        <ButtonSearchInitialPage
          icon={<PiCertificate />}
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
          url="/cadastros/equipamento"
          icon={<GiHammerNails />}
          arrow="bi bi-caret-down"
          text="Equipamento"
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
        <ButtonSearchInitialPage
          url="/cadastros/veiculo"
          icon={<FaTruck />}
          arrow="bi bi-caret-down"
          text="Veículo"
        />
      </div>
      <h4>Cadastro Risco </h4>
      <div className={`${styles.containerThirdButtons}`}>
        <ButtonSearchInitialPage
          url="/cadastros/fatoresrisco"
          icon={<FaTriangleExclamation />}
          arrow="bi bi-caret-down"
          text="Fatores de Risco"
        />
        <ButtonSearchInitialPage
          url="/cadastros/tecnicautilizada"
          icon={<GiThorHammer />}
          arrow="bi bi-caret-down"
          text="Técnica Utilizada"
        />
        <ButtonSearchInitialPage
          url="/cadastros/fontegeradora"
          icon={<AiFillThunderbolt />}
          arrow="bi bi-caret-down"
          text="Fonte Geradora"
        />
        <ButtonSearchInitialPage
          url="/cadastros/exposicao"
          icon={<FaRadiation />}
          arrow="bi bi-caret-down"
          text="Exposição"
        />
        <ButtonSearchInitialPage
          url="/cadastros/meiopropagacao"
          icon={<TbWind />}
          arrow="bi bi-caret-down"
          text="Meio de Propagação"
        />
        <ButtonSearchInitialPage
          url="/cadastros/tragetoria"
          icon={<GrDirections />}
          arrow="bi bi-caret-down"
          text="Tragetória"
        />
        <ButtonSearchInitialPage
          url="/cadastros/medidacontrole"
          icon={<AiOutlineControl />}
          arrow="bi bi-caret-down"
          text="Medida de Controle"
        />
      </div>
    </>
  );
}
