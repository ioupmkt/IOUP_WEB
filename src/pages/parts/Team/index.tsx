import { Stack, Typography } from "@mui/material";
import DividerH1 from "../../../components/DividerH1";
import { Section } from "../../../components/Section";
import TeamItem from "../../../components/TeamItem";






export default function Team(){

    const team = [
        {
   image:'/img/Time/Carlos.png',
   pessoa:'Carlos'       
       },
       {
   image:'/img/Time/Danton.png',
   pessoa:'Danton'
       },
   
           {
   image:'/img/Time/Iuri.png',
   pessoa:'Iuri'
           }
       ]

    return (
    <Section name="Equipe" id="team">
<Stack>
<DividerH1/>
<Typography sx={{fontFamily:'Filson Pro,Roboto',fontSize:{md:39,xs:25},fontWeight:600,lineHeight:{md:'30px',xs:'20px'}, color:'#325CD9',paddingLeft:'1%',paddingTop:'1rem'}}>
Pessoas
</Typography>
<Stack flexDirection={{md:'row',xs:'column'}} justifyContent={{md:'space-between',xs:'center'}} gap={{md:0,xs:'1rem'}}>
{team.map(equipe=>(
    <TeamItem key={equipe.image} image={equipe.image} pessoa={equipe.pessoa} />
))}
{/* <TeamItem image={team[0].image} pessoa={team[0].pessoa} /> */}
</Stack>
</Stack>
    </Section>
    )
}