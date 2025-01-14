import ModelPage from "@/components/common/ModelPage";
import NewUser from "@/components/configuracoes/NewUser";
import Usuarios from "@/components/configuracoes/Usuários";

export default function Home() {
  return (
    <div>
      <ModelPage
        urlAnterior={{ name: "Usuários", url: "/configuracoes/usuarios" }}
        content={ <NewUser /> }
      />

    </div>
  );
}
