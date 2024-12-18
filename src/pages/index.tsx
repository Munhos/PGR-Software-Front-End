import ModelPage from "@/components/common/ModelPage";
import InicialMenuComponent from "@/components/Home";

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
