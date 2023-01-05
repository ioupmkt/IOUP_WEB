import { Box, Stack, Typography } from "@mui/material";
import TitleSection from "../../../components/TitleSection";
import { Section } from "../../../components/Section";
import DividerH1 from "../../../components/DividerH1";

export default function Move_Us() {
  return (
    <Section id="move_us" name="Isso Nos Move">
      <Stack flexDirection={{ md: "row", xs: "column" }}gap={1}>
        <Box>
          <TitleSection
            title="Isso nos move"
            position="relative"
            left={{ md: "5%", xs: "0" }}
            size={{ md: 5, xs: 3 }}
            top={{ md:'-25%',xs: "0" }}
          />
        </Box>
        <Stack padding={'1rem'} bgcolor={'#0F3684'} borderRadius={'8px'} justifyContent={'flex-start'}>
            <DividerH1/>
          <Typography component={"h2"} sx={{fontSize:{md:39,xs:18},fontWeight:600,fontFamily:'Filson',color:'#FFF'}} >Nossa Missão</Typography>
          <Typography component={"p"} sx={{fontSize:{md:25,xs:16},fontFamily:'Filson,Roboto',color:'#FFF'}}>
            Na IOUP nossa missão é criar arte e gerar resultado.
          </Typography>
        </Stack>
        <Stack padding={'1rem'} bgcolor={'#0F3684'} borderRadius={'8px'} justifyContent={'flex-end'}>
            {/* <div style={{height:'150px'}}></div> */}
            <DividerH1/>
            <Typography component={'h2'} sx={{fontSize:{md:39,xs:18},fontWeight:600,fontFamily:'Filson',color:'#FFF'}}>Nossa Visão</Typography>
            <Typography component={'p'} sx={{fontSize:{md:25,xs:16},fontFamily:'Filson,Roboto',color:'#FFF'}}>Até 2027 ter gerado arte e resultado para 0,01% do mercado nacional.</Typography>
        </Stack>
      </Stack>
    </Section>
  );
}
