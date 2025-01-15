import ModelPage from "@/components/common/ModelPage";
import InicialMenuComponent from "@/components/Home";
import Suporte from "@/components/Suporte";

export default function Home() {
  return (
    <div>
      <ModelPage
        nomePagina="Suporte"
        content={ <Suporte /> }
      />

    </div>
  );
}
