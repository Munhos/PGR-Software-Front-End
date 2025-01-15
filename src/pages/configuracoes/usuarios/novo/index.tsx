import ModelPage from "@/components/common/ModelPage";
import NewUser from "@/components/configuracoes/NewUser";
import Usuarios from "@/components/configuracoes/Usuários";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Novo Usuário"
        content={ <NewUser /> }
      />

    </div>
  );
}
