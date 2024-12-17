import ModelPage from "@/components/common/ModelPage";
import InicialMenuComponent from "@/components/incialMenuComponent";

export default function Home() {
  return (
    <div>
      <ModelPage
        urlAnterior={{ name: "Home", url: "/" }}
        content={ <InicialMenuComponent /> }
      />

    </div>
  );
}
