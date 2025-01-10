import React from "react";
import styles from "./style.module.css";
import NormalSearchInput from "@/components/common/Inputs/NormalSearchInput";

export default function EditRac() {
  return (
    <div className={styles.container}>
      <div className={styles.divContainerInputs}>
        <NormalSearchInput width="100%" placeHolder="Descrição *" />
      </div>
    </div>
  );
}
