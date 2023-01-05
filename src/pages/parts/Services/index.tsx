import { Stack } from '@mui/material';
import { Section } from './../../../components/Section/index';


export default function Services(){

    const services = [
      {
        title: "Marketing Digital",
        subtitle: "Google Ads Facebook e Instagram Ads",
        description: `A mídia certa no lugar certo, gerando mais fluxo para sua loja.
        Diagnosticamos, avaliamos e implementamos conteúdo e mídia otimizados para potencializar os resultados do seu negócio.`,
      },
      {
        title: "Social Media",
        subtitle: "Estratégia de mídias sociais. Criação e gerenciamento de conteúdo. Análises e relatórios.",
        description: `Ajudamos a transformar seguidores em fãs e a gerar vendas e oportunidades recorrentes para nossos clientes, construindo, assim, laços reais e uma legião de defensores das marcas.`,
      },
      {
        title: "Criação",
        subtitle: `Business
        Branding`,
        description: `Tudo começa com uma boa marca. Por isso temos um time especializado em ajudar organizações a se posicionarem dentro dos seus propósitos. Buscamos sempre criar um diferencial da marca e trazê-lo à tona, aliado aos objetivos do negócio e às mais novas tendências.`,
      },
      {
        title: "",
        subtitle: "",
        description: ``,
      },
    ];



    return(
        <Section name="Serviços" id='services'>
<Stack>
    
</Stack>
        </Section>
    );
}