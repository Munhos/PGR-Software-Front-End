import TuiImageEditor from "@/components/ImageEdit";
import React, { useRef } from "react";

export default function Testes() {
  const editorRef = useRef<{ getInstance: () => any } | null>(null);

  const handleSave = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance(); // Acessa a instância do editor
      const imageData = editorInstance.toDataURL(); // Obtém a imagem editada como Data URL
      console.log("Imagem salva:", imageData);
      // Aqui você pode adicionar lógica para salvar o `imageData`, por exemplo, enviá-lo para um servidor.
    }
  };

  const handleCancel = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.clearObjects(); // Exemplo: Limpa os objetos adicionados na imagem
      console.log("Edição cancelada");
    }
  };

  return (
    <div>
      <TuiImageEditor
        image="https://t3.ftcdn.net/jpg/00/92/53/56/360_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg" // URL da imagem inicial
        onSave={handleSave} // (Opcional) Passa a função de salvar
        onCancel={handleCancel} // (Opcional) Passa a função de cancelar
      />
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button onClick={handleSave}>Salvar Imagem</button>
        <button onClick={handleCancel}>Cancelar Edição</button>
      </div>
    </div>
  );
}
