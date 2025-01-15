import ModelPage from "@/components/common/ModelPage";
import Engenheiros from "@/components/configuracoes/Engenheiros";
import NewUser from "@/components/configuracoes/NewUser";
import Usuarios from "@/components/configuracoes/Usuários";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Engenheiros"
        content={ <Engenheiros /> }
      />

    </div>
  );
}
