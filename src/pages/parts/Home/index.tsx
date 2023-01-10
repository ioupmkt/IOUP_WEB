import { Box, Typography } from '@mui/material'
import global from '../../../css/global.module.scss'
import Background from '../../../components/Background';
import { Section } from '../../../components/Section';
export default function Home(){

    return(
<Section name='home' id='home'>
        <Box sx={{
            display:'flex',
            flexDirection:{md:'row',xs:'column'},
        }} >
<Box sx={{width:{md:'50%',xs:'100%'},margin:{md:'139px 0 0',xs:'0'}}} >
<Typography sx={{color:'#325CD9',fontFamily:'Filson Pro',fontSize:49, fontWeight:700,lineHeight:'48px',padding:'0 12rem 0 0'}} component='h1'>
Criamos arte Geramos Resultado
</Typography>
<Typography component='p' sx={{color:"#404144",fontFamily:'Filson Pro', fontSize:'1.9375rem',margin:'1.75rem 0',fontWeight:300,padding:'0 8rem 0 0',lineHeight:'40px'}}>
Descubra agora como podemos transformar sua vida através do seu negócio.

</Typography>
</Box>
<Box sx={{
    // backgroundImage:'url(img/Image1.png)',
    // backgroundSize:'cover',
    width:{md:"50%",xs:"100%"},
    

}}>
    <img width={'100%'} src="img/Image1.png" alt="Image Home" />

</Box>

            </Box>
            {/* <Background/> */}

            <Box sx={{padding:'10px'}}>
                <Typography sx={{fontSize:'2.4375rem' ,color:'#404144',fontFamily:'Filson Pro',textAlign:'center',fontWeight:300,lineHeight:'48px',fontStyle:'normal'}} component='p'>
                Ignorar o<Typography sx={{color:'#325cd9',fontSize:'2.4375rem'}} component='span'> marketing digital</Typography> é como abrir um negócio e não contar para ninguém .<Typography sx={{color:'#325cd9',fontSize:'2.4375rem'}} component='span'> Se você ainda não está on-line,</Typography> rapidamente alguém vai passar na sua frente e <Typography sx={{color:'#325cd9',fontSize:'2.4375rem'}} component='span'>seu negócio vai se tornar obsoleto.</Typography>

                </Typography>
            </Box>

        </Section>
    );

}