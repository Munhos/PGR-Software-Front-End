import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import logoTipoPGRSoftware from "../../../public/logos/logoTipoPGRSoftware.png";
import logoPGRSoftware from "../../../public/logos/logoPgrSoftware.png";
import ButtonDropdown from "../common/Buttons/ButtonsSideMenu/ButtonDropdown";
import ButtonNormal from "../common/Buttons/ButtonsSideMenu/ButtonNormal";
import Link from "next/link";
import Image from "next/image";


export default function SideMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Pré-carregar imagens para evitar piscamentos
    const img1 = new window.Image();
    const img2 = new window.Image();
    img1.src = logoTipoPGRSoftware.src;
    img2.src = logoPGRSoftware.src;

    img1.onload = img2.onload = () => setImagesLoaded(true);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const changeShowSideMenu = () => {
    setShowSideMenu((prev) => !prev);
  };

  return (
    <main
      className={styles.main}
      style={{
        width: showSideMenu ? "250px" : "80px",
        transition: "width 0.3s ease-in-out",
      }}
    >
      <div
        className={styles.divMain}
        style={{
          transform: showSideMenu ? "translateX(0)" : "translateX(-85px)",
          overflow: "hidden",
        }}
      >
        <i
          onClick={changeShowSideMenu}
          className={`bi bi-list ${styles.iconHideMenu}`}
          style={{
            transform: showSideMenu ? "translateX(0)" : "translateX(110px)",
          }}
        ></i>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            width: "100%",
            height: "100px",
          }}
        >
          <Link href={"/"} style={{ width: "100%", display:"flex", justifyContent:"center" }} >
            {imagesLoaded ? (
              <Image
                src={showSideMenu ? logoTipoPGRSoftware : logoPGRSoftware}
                alt="Logo PGR Software"
                
                style={{transform: logoTipoPGRSoftware ? "scale(0.6)" : "scale(0.4)"}}
                className={styles.logo}
              />
            ) : (
              <span>Carregando...</span>
            )}

          </Link>
        </div>

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
          texto="Gerar Laudos"
          url="/laudos"
          icone="bi bi-book"
          showSideMenu={showSideMenu}
        />

        <ButtonDropdown
          icone="bi bi-gear"
          name="Configurações"
          options={[
            { name: "Engenheiros", url: "/configuracoes/engenheiros" },
            { name: "Empresa", url: "/configuracoes/empresa" },
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
          name="Administrador Software"
          options={[{ name: "Empresas", url: "/administrador/empresas" }]}
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
          options={[{ name: "Minha Conta", url: "option1" }]}
          isOpen={openDropdown === "Usuário"}
          onToggle={() => handleDropdownToggle("Usuário")}
          showSideMenu={showSideMenu}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      </div>
    </main>
  );
}
