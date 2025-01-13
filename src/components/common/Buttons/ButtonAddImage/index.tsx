import React from "react";

interface ButtonAddProps {
  width?: string;
  height?: string;
  onFileChange: (fileUrl: string) => void; // Envia a URL do arquivo
}

export default function ButtonAddImageGeneral({
  width,
  height,
  onFileChange,
}: ButtonAddProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Captura o primeiro arquivo
    if (file) {
      const fileUrl = URL.createObjectURL(file); // Gera a URL do arquivo
      onFileChange(fileUrl); // Envia a URL ao componente pai
    }
  };

  return (
    <>
      <label
        htmlFor="inputFile"
        style={{
          width,
          height,
          border: "1px solid var(--green03)",
          cursor: "pointer",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i
          style={{ fontSize: "200%", color: "var(--green03)" }}
          className="bi bi-file-earmark-arrow-up"
        ></i>
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="inputFile"
        onChange={handleFileChange} // Gera a URL ao selecionar um arquivo
      />
    </>
  );
}
