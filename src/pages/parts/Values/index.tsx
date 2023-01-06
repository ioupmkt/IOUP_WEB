import { Grid, Stack, Typography } from "@mui/material";
import { Section } from "../../../components/Section";
import ValueItem from "../../../components/ValueItem";
import TitleSection from "../../../components/TitleSection";
import DividerH1 from "../../../components/DividerH1";
import { fontWeight } from "@mui/system";

const valores = [
  { background: "/img/valores/Inovacao.png", text: "Inovação" },
  { background: "/img/valores/Uniao.png", text: "União" },
  { background: "/img/valores/Resultado.png", text: "Resultado" },
  { background: "/img/valores/Phoda.png", text: "Phodaa!" },
  { background: "/img/valores/Criatividade.png", text: "Criatividade" },
  { background: "/img/valores/Arte.png", text: "Arte" },
  { background: "/img/valores/Respeito.png", text: "Respeito" },
  { background: "/img/valores/Proatividade.png", text: "Proatividade" },
];

export default function Valores() {
  return (
    <Section name="Valores" id="values" >
      <Stack>
        <DividerH1/>
      <Typography sx={{fontFamily:'Filson',fontSize:{md:31,xs:23},fontWeight:700,textTransform:'uppercase',color:'#325CD9',paddingLeft:1}} > Valores</Typography>
      </Stack>
      {/* <Stack flexDirection={{ md: "row", xs: "column" }}> */}
        <Grid container spacing={0} direction={{md:'row',xs:'column'}}>
{ valores.map((valor)=>(
  <>
  <ValueItem background={valor.background} text={valor.text}/>
  </>
))}


        </Grid>
        
          {/* <TitleSection title="Valores" size={{md:23,xs:35}} left={{md:'0',xs:'0'}} position={'relative'} top={{md:'0',xs:'0'}}/> */}
        
      {/* </Stack> */}
    </Section>
  );
}
