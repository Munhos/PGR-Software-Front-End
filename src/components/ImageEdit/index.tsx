import React, { forwardRef, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";
import ButtonSave from "../common/Buttons/ButtonSave";

const Editor = dynamic(() => import("./WrappedEditor"), { ssr: false });

const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));

const myTheme = {
  "header.display": "none",
};

const TuiImageEditor = (props: any) => {
  const { image, onSave } = props;
  const editorRef = useRef<{ getInstance: () => any } | null>(null);

  useEffect(() => {
    // Recarrega a imagem no editor quando `image` muda
    if (editorRef.current && image) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.loadImageFromURL(image, "Nova Imagem").catch((err: any) => {
        console.error("Erro ao carregar a imagem:", err);
      });
    }
  }, [image]);

  return (
    <div className={styles.editor}>
      <EditorWithForwardedRef
        {...props}
        includeUI={{
          loadImage: {
            path: image,
            name: "image",
          },
          theme: myTheme,
          menu: ["shape", "text", "mask", "icon", "draw", "crop", "flip", "rotate"],
          initMenu: "icon",
          uiSize: {
            width: "1000px",
            height: "700px",
          },
          menuBarPosition: "bottom",
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={false}
        ref={editorRef}
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <ButtonSave />
      </div>
    </div>
  );
};

export default TuiImageEditor;
