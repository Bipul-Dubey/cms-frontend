import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "styled-components";

export default function SectionHeading({ title = "", description = "" }) {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: "center" }}>
      {title ? (
        <Typography
          variant="h4"
          fontWeight={600}
          fontSize={"2.1rem"}
          color={theme.primary.lighter}
        >
          {title}
        </Typography>
      ) : null}
      {description ? (
        <Typography variant="subtitle1">{description}</Typography>
      ) : null}
    </Box>
  );
}
