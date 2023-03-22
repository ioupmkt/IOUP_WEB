import styles from "./styles.module.scss";

export default function Background() {
  return (
    <div className={styles.Background}>
      <span
        className={styles.span1}
        // style={{
        //   position: "absolute",
        //   width: "108px",
        //   height: "30px",
        //   left: "855px",
        //   top: 771,
        //   fontFamily: "Filson Pro",
        //   fontStyle: "normal",
        //   fontWeight: 400,
        //   fontSize: "25px",
        //   lineHeight: "30px",
        //   letterSpacing: "0.2px",
        //   color: "#FFF",
        // }}
      >
        Conheça
      </span>
      <span
        className={styles.span2}
        // style={{
        //   display: "flex",
        //   position: "relative",
        //   color: "#FFF",
        //   fontWeight: 900,
        //   fontSize: 39,
        //   top: 40,
        //   left: 700,
        //   width: "100%",
        //   fontFamily: "Filson Pro",
        // }}
      >
        Nossos Serviços →
      </span>
      <span
        className={styles.span3}
        // style={{
        //   color: "#011336",
        //   fontSize: 175.163,
        //   opacity: 0.1,
        //   position: "relative",
        //   top: "-10%",
        //   left: 500,
        //   textTransform: "uppercase",
        //   zIndex: "-1",
        // }}
      >
        Serviços
      </span>
    </div>
  );
}
