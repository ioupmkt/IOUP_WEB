import { Divider, Stack, Typography } from "@mui/material";
import { Section } from "./../../../components/Section/index";
import DividerH1 from "../../../components/DividerH1";
import ServiceItem from "../../../components/ServiceItem";

export default function Services() {
  const services = [
    {
      title: "Marketing Digital",
      subtitle: `Google Ads\n
       Facebook e Instagram Ads`,
      description: `A mídia certa no lugar certo, gerando mais fluxo para sua loja.
        Diagnosticamos, avaliamos e implementamos conteúdo e mídia otimizados para potencializar os resultados do seu negócio.`,
    },
    {
      title: "Social Media",
      subtitle: `Estratégia de mídias sociais.\n
         Criação e gerenciamento de conteúdo.\n 
         Análises e relatórios.`,
      description: `Ajudamos a transformar seguidores em fãs e a gerar vendas e oportunidades recorrentes para nossos clientes, construindo, assim, laços reais e uma legião de defensores das marcas.`,
    },
    {
      title: "Criação",
      subtitle: `Business\n
      Branding`,
      description: `Tudo começa com uma boa marca. Por isso temos um time especializado em ajudar organizações a se posicionarem dentro dos seus propósitos. Buscamos sempre criar um diferencial da marca e trazê-lo à tona, aliado aos objetivos do negócio e às mais novas tendências.`,
    },
    {
      title: "Web/Dev",
      subtitle: `Criação de sites institucionais;
        Landing pages;
        Hotsites;
        Lojas virtuais;
        Criação Mobile e
        Criação de Sistemas;`,
      description: `Elaboramos projetos otimizados e responsivos para garantir que sua marca venda mais. Pesquisamos seus concorrentes, geramos conteúdos adequados à realidade do seu setor e definimos as melhores estratégias de layout para você conquistar ainda mais clientes! Tudo isso tendo como base metodologias como UI/UX Design.`,
    },
  ];

  return (
    <Section name="Serviços" id="services">
      <Stack flexDirection={"column"}>
        <DividerH1 />
        <Typography
          sx={{
            fontSize: { md: 39, xs: 25 },
            fontFamily: "Filson Pro",
            fontWeight: 600,
            color: "#325CD9",
            paddingLeft: { md: "1%", xs: "1%" },
          }}
        >
          Serviços
        </Typography>
        <Divider color={"#00000030"} />

        {services.map((service) => (
          <>
            <ServiceItem
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
            />
            <Divider
              sx={{ margin: { md: "2rem 0", xs: "1rem 0" } }}
              color={"#00000030"}
            />
          </>
        ))}
        
      </Stack>
    </Section>
  );
}
