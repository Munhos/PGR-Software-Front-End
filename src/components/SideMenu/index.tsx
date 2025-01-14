import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import logoTipoPGRSoftware from "../../../public/logos/logoTipoPGRSoftware.png";
import logoPGRSoftware from "../../../public/logos/logoPgrSoftware.png";
import ButtonDropdown from "../common/Buttons/ButtonsSideMenu/ButtonDropdown";
import ButtonNormal from "../common/Buttons/ButtonsSideMenu/ButtonNormal";
import Link from "next/link";

export default function SideMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const [showSideMenu, setShowSideMenu] = useState(true);

  function changeShowSideMenu() {
    showSideMenu ? setShowSideMenu(false) : setShowSideMenu(true);
  }

  return (
    <main
      className={styles.main}
      style={{
        width: showSideMenu ? "250px" : "80px",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <i
        onClick={changeShowSideMenu}
        className={`bi bi-list ${styles.iconHideMenu}`}
      ></i>

      {showSideMenu ? (
        <Link href={"/"}>
          <img
            src={logoTipoPGRSoftware.src}
            alt="Logo PGR Software"
            className={styles.logo}
          />
        </Link>
      ) : (
        <Link href={"/"}>
          <img
            src={logoPGRSoftware.src}
            alt="Logo PGR Software"
            className={styles.logo}
          />
        </Link>
      )}

      <ButtonNormal
        texto="Serviços"
        url="/servico"
        icone="bi bi-person"
        showSideMenu={showSideMenu}
      />

      <ButtonNormal
        texto="Trabalhadores"
        url="/trabalhadores"
        icone="bi bi-person-vcard"
        showSideMenu={showSideMenu}
      />

      <ButtonNormal
        texto="GES"
        url="/ges"
        icone="bi bi-people"
        showSideMenu={showSideMenu}
      />

      <ButtonNormal
        texto="Laudos"
        url="/laudos"
        icone="bi bi-book"
        showSideMenu={showSideMenu}
      />

      <ButtonDropdown
        icone="bi bi-gear"
        name="Configurações"
        options={[
          { name: "Engenheiro", url: "/engenheiro" },
          { name: "Empresa", url: "/empresa" },
          { name: "Usuários", url: "/configuracoes/usuarios" },
        ]}
        isOpen={openDropdown === "Configurações"}
        onToggle={() => handleDropdownToggle("Configurações")}
        showSideMenu={showSideMenu}
      />
      <ButtonNormal
        texto="Cadastros"
        url="/cadastros"
        icone="bi bi-journal-plus"
        showSideMenu={showSideMenu}
      />

      <ButtonDropdown
        icone="bi bi-coin"
        name="Financeiro"
        options={[
          { name: "Assinaturas", url: "/assinaturas" },
          { name: "Indicações", url: "/indicacoes" },
        ]}
        isOpen={openDropdown === "Financeiro"}
        onToggle={() => handleDropdownToggle("Financeiro")}
        showSideMenu={showSideMenu}
      />

      <ButtonDropdown
        icone="bi bi-file-earmark-lock"
        name="Administrador"
        options={[
          { name: "Empresa", url: "/administrador/empresa" },
        ]}
        isOpen={openDropdown === "Administrador"}
        onToggle={() => handleDropdownToggle("Administrador")}
        showSideMenu={showSideMenu}
      />

      <ButtonNormal
        texto="Inconsistências"
        url="/inconsistencias"
        icone="bi bi-newspaper"
        showSideMenu={showSideMenu}
      />

      <ButtonDropdown
        icone="bi bi-person-circle"
        name="Usuário"
        options={[
          { name: "Minha Conta", url: "option1" },
        ]}
        isOpen={openDropdown === "Usuário"}
        onToggle={() => handleDropdownToggle("Usuário")}
        showSideMenu={showSideMenu}
      />

      <Link className={styles.link} href={"/suporte"}>
        Suporte
      </Link>

      {showSideMenu ? (
        <>
          <Link className={styles.link2} href="/termosdeuso">
            Termos de Uso
          </Link>
          <Link className={styles.link2} href="/politicasdeprivacidade">
            Políticas de Privacidade
          </Link>
        </>
      ) : null}
    </main>
  );
}
