import { ImageList, ImageListItem, Stack } from "@mui/material";
import PortfolioItem from "../../components/PortfolioItem";









export default function Portfolio (){

const jobs = [
    {
        image:'/img/portfolio/ocravoearosa.png',
        client:'OCravoeaRosa',
        link:'https://ocravoearosa.commercesuite.com.br/'
    }
]

    return (
    <>
    <Stack>
        <ImageList  variant="masonry" cols={3}>
{jobs.map((job) =>(
    <>
    <ImageListItem key={job.client}>
            <PortfolioItem client={job.client} image={job.image}link={job.link} />
            </ImageListItem>
            </>
        ))}
       
    
      </ImageList>
    </Stack>
    </>
    );
}