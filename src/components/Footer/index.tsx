import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const date = new Date();
const now = date.getFullYear();
export default function Footer() {
  return (
    <footer className={styles.footer_IOUP}>
      <Box display={"flex"}>
        <Typography component="p" textAlign="center">
          &copy;&nbsp;Copyright {now}. Todos os direitos reservados para IOUP
          MKT. &nbsp;
        </Typography>
      </Box>
    </footer>
  );
}
