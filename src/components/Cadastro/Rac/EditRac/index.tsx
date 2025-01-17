import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";
import ButtonSave from "@/components/common/Buttons/ButtonSave";

export default function EditRac() {
  return (
    <div className={styles.container}>
      <div className={styles.divContainerInputs}>
        <NormalSearchInput width="100%" placeHolder="Descrição *" />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "15px",
          }}
        >
          <ButtonSave />
        </div>
      </div>
    </div>
  );
}
