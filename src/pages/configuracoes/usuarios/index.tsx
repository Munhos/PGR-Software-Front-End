import ModelPage from "@/components/common/ModelPage";
import Usuarios from "@/components/configuracoes/Usuários";
import InicialMenuComponent from "@/components/Home";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Usuários"
        content={ <Usuarios /> }
      />

    </div>
  );
}
