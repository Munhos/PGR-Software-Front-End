import Empresa from "@/components/Administrador/Empresas";
import ModelPage from "@/components/common/ModelPage";
import InicialMenuComponent from "@/components/Home";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Empresa"
        content={ <Empresa /> }
      />

    </div>
  );
}
