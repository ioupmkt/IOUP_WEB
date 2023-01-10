import { Box, Stack, Typography } from "@mui/material";

type ServiceItemProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function ServiceItem({
  title,
  subtitle,
  description,
}: ServiceItemProps) {
  return (
    <>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <Box width={"50%"}>
          <Typography
            sx={{
              fontFamily: "Filson Pro Regular",
              fontSize: { md: 49, xs: 28 },
              fontWeight: 600,
              lineHeight: { md: "40px", xs: "25px" },
              color: "#404144",
              padding: { md: "2rem", xs: "1rem" },
            }}
            component={"h2"}
          >
            {title}
          </Typography>
        </Box>
        <Stack
          width={"50%"}
          padding={{ md: "2rem", xs: 0 }}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontFamily: "Filson Pro Regular,Roboto",
              fontSize: { md: 25, xs: 18 },
              fontWeight: 600,
              lineHeight: { md: "30px", xs: "20px" },
              color: "#325CD9",
            }}
            component={"h2"}
          >
            {subtitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Filson Pro Regular,Roboto",
              fontSize: { md: 16, xs: 12 },
              fontWeight: 400,
              lineHeight: { md: "30px", xs: "20px" },
              color: "#404144",
            }}
            component={"p"}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}
