import { Box, Stack } from "@mui/material"

type TeamItemProps =
{
    image: string
    pessoa:string


}

export default function TeamItem({image,pessoa}:TeamItemProps){
        
    return(
        <>
<Stack >
    <Box sx={{padding:{md:'2rem',xs:'1rem'}}}>
        <img src={image} alt={pessoa} />

    </Box>

</Stack>

        </>
        )
}