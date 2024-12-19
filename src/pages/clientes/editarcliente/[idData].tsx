import NewAndEditClient from '@/components/ClientsComponent/NewAndEditClient';
import ModelPage from '@/components/common/ModelPage';
import { useRouter } from 'next/router';

export default function ItemPage() {
    const router = useRouter();
    const { idData } = router.query;

    return (
        <div>
            <ModelPage
                urlAnterior={{ name: "Clientes", url: "/clientes" }}
                content={
                    <NewAndEditClient 
                        cnpj="00.000.000/0001-00"
                        nomeFantasia="Empresa Fictícia LTDA"
                        razaoSocial="Empresa Fictícia Comércio de Produtos LTDA"
                        cnae="4711-3/01"
                        atividadePrincipal="Comércio varejista de mercadorias em geral"
                        grauRisco="Médio"
                        cep="12345-678"
                        estado="SP"
                        cidade="São Paulo"
                        localizacaoCompleta="Rua Exemplo, 123 - Bairro Exemplo, São Paulo - SP"
                        responsavelAprovacao="João Silva"
                        data="2024-12-19"
                        contato="(11) 98765-4321"
                        email="contato@empresaficticia.com"
                        observacao="Cliente registrado para teste no sistema."
                    />
                }
            />
        </div>
    );
}
