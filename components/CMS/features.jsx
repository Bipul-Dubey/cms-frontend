import { FEATURES } from "@/constants/dummyData";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";
import DescriptionCard from "../common/DescriptionCard";

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
          <DescriptionCard
            description={feature.description}
            title={feature.featureName}
            width={"485px"}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Features;
