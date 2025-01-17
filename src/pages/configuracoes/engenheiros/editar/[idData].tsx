import ModelPage from "@/components/common/ModelPage";
import Engenheiros from "@/components/configuracoes/Engenheiros";
import EditarEngenheiro from "@/components/configuracoes/Engenheiros/Editar";
import NovoEngenheiro from "@/components/configuracoes/Engenheiros/novo";
import NewUser from "@/components/configuracoes/NewUser";
import Usuarios from "@/components/configuracoes/Usuários";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Edição de Engenheiros"
        content={ <EditarEngenheiro /> }
      />

    </div>
  );
}
