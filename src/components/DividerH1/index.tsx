import { Typography } from "@mui/material";


export default function DividerH1() {
  return (
    <>
      <Typography
        sx={{
          width: { md: "14%", xs: "30%" },
          position: "relative",
          left: { md: "1%", xs: "1%" },
          borderTop: "6px solid #05C7F2",
        }}
        component={"hr"}
      />

      {/* <hr style={style}/> */}
    </>
  );
}
