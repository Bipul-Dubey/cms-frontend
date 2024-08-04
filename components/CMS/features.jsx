import { FEATURES } from "@/constants/dummyData";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

function Features({}) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "25px 0px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        color={theme.primary.lighter}
        textAlign={"center"}
      >
        Features
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "0px 10px",
          gap: 1,
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {FEATURES?.map((feature) => (
          <Card sx={{ width: "485px", height: "100px", padding: 2 }}>
            <Typography variant="h6" fontSize={"1.07rem"} fontWeight={600}>
              {feature.featureName}
            </Typography>
            <Typography>{feature.description}</Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Features;
