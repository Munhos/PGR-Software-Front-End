import React from "react";
import styles from "./style.module.css";

export default function Suporte() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h5>Entre em Contato com Nossa Equipe</h5>
                <hr />
                <div style={{ display: "flex",width:"30%", justifyContent: "space-between", alignItems: "center", gap: "30px" }}>
                    <i className="bi bi-envelope"></i>
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width:"300px"}}>
                        <h5>E-Mail</h5>
                        <p style={{ color: "gray" }}>software@protmar.com.br</p>
                    </div>
                </div>

                <div style={{ display: "flex", width:"30%", justifyContent: "space-between", alignItems: "center" , gap: "30px"}}>
                    <i className="bi bi-telephone-fill"></i>
                    <div style={{ display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", width:"300px"}}>
                        <h5>Telefone</h5>
                        <p style={{ color: "gray" }}>(44)9 9924-7717</p>
                    </div>
                </div>

                <h6>Ou clique no botão abaixo para entrar em contato por WhatsApp</h6>
                <i className="bi bi-whatsapp"></i>
            </div>
        </div>
    );
}