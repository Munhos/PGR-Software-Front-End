import Empresa from "@/components/Administrador/Empresa";
import ModelPage from "@/components/common/ModelPage";
import InicialMenuComponent from "@/components/Home";

export default function Home() {
  return (
    <div>
      <ModelPage
        urlAnterior={{ name: "Empresa", url: "/" }}
        content={ <Empresa /> }
      />

    </div>
  );
}
