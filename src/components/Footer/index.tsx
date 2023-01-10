import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const date = new Date();
const now = date.getFullYear();
export default function Footer() {
  return (
    <footer className={styles.footer_IOUP}>
      <Box display={"flex"} flexDirection={{md:'row',xs:'column'}} alignItems={'center'} gap={{md:0,xs:'1rem'}}  width="100%">
        <Box display={'flex'} flexDirection={'column'} width='50%' padding={'0 2rem'} gap={'1rem'}>
          <Typography sx={{fontFamily:'var(--ioup-font)',fontSize:{md:'28px',xs:18}}} textAlign={{md:'left',xs:'center'}} component={'h2'}>
            Vamos Conversar?
          </Typography>
          <Typography sx={{fontFamily:'var(--ioup-font)',fontSize:{md:'28px',xs:18},color:'#05C7F2',textDecoration:'none',textTransform:'lowercase'}} textAlign={{md:'left',xs:'center'}} component={'a'} href="mailto:contato@ioupmkt.com">
            contato@ioupmkt.com
          </Typography>
          <Typography sx={{fontFamily:'var(--ioup-font)'}} component="p" textAlign={{md:'left',xs:'center'}}>
          &copy;&nbsp;Copyright {now}. Todos os direitos reservados para IOUP
          MKT. &nbsp;
        </Typography>
        </Box>
        <Box display={'flex'} width={'50%'} justifyContent={'center'}>
<img style={{background:'#FFF'}} src="/img/logo_IOUP.png" />

        </Box>
      </Box>
    </footer>
  );
}
