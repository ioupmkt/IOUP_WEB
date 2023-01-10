import { Box, Stack, Typography } from "@mui/material";

type ValueItemProps = {
    background:string
    text: string
}



export default function ValueItem({background,text}:ValueItemProps){
    return(
    <>
<Stack justifyContent={'center'} alignItems={'center'} sx={{background:`url(${background})`,width:{md:300,xs:'100%'},height:{md:300,xs:300},backgroundSize:'cover'}}>
<Box display={'flex'}  justifyContent={'center'} alignContent={'center'} sx={{position:'relative'}}>
<Typography component={'span'} sx={{fontFamily:'Filson Pro',fontSize:{md:31,xs:25},textTransform:'uppercase',fontWeight:600,color:'#FCFCFC'}}>
{text}
</Typography>
</Box>
</Stack>

    </>
    );
}