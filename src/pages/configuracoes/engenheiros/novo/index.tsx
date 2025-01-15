import ModelPage from "@/components/common/ModelPage";
import Engenheiros from "@/components/configuracoes/Engenheiros";
import NovoEngenheiro from "@/components/configuracoes/Engenheiros/novo";
import NewUser from "@/components/configuracoes/NewUser";
import Usuarios from "@/components/configuracoes/Usuários";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Cadastro de Engenheiros"
        content={ <NovoEngenheiro /> }
      />

    </div>
  );
}
